import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Piano from '../components/Piano'
import PianoItems from '../components/PianoItems'

let container = null
beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('Piano component renders well', () => {
  act(() => {
    render(<Piano />, container)
  })
  expect(container.textContent).toBe("CDEFGABAnimate");
})

it('Piano list items renders properly', () => {
  act(() => {
    render(<PianoItems />, container);
  });
  // Query for piano Ordered parent list item
  const ol = document.querySelector("ol");
  expect(ol.innerHTML).toBe('<li class="charland">C</li><li class="darkeys"></li><li class="charland fill">D</li><li class="darkeys"></li><li class="charland fill">E</li><li class="darkeys"></li><li class="charland fill">F</li><li class="charland">G</li><li class="darkeys"></li><li class="charland fill">A</li><li class="darkeys"></li><li class="charland fill">B</li>');
});

it('Piano list items respond to clicks', () => {
  const onClick = jest.fn();
  act(() => {
    render(<PianoItems onClick={onClick} />, container);
  });
  // Query for piano Ordered first list item
  const ol = document.querySelector("ol");
  expect(ol.innerHTML).toBe('<li class="charland">C</li><li class="darkeys"></li><li class="charland fill">D</li><li class="darkeys"></li><li class="charland fill">E</li><li class="darkeys"></li><li class="charland fill">F</li><li class="charland">G</li><li class="darkeys"></li><li class="charland fill">A</li><li class="darkeys"></li><li class="charland fill">B</li>');

  act(() => {
    ol.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onClick).toHaveBeenCalledTimes(1);
});

it('Piano list items when clicked changes the logger input element value', () => {
  const onClick = jest.fn();
  act(() => {
    render(<PianoItems onClick={onClick} />, container);
  });

  // Query for piano Ordered first list item
  const li = document.querySelectorAll("li")[0];
  const expectedLoggerValue = li.textContent;
  // Ensure were picking the first Item
  expect(li.textContent).toBe('C');

  act(() => {
    li.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  // Simulate Click
  expect(onClick).toHaveBeenCalledTimes(1);
  // Query for Logger Input Element
  const logger = document.querySelectorAll("input")[0];
  
  expect(logger.innerHTML).toBe(expectedLoggerValue)
});

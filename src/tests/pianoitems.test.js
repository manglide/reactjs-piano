import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

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

it('Piano list items renders properly', () => {
  act(() => {
    render(<PianoItems />, container);
  });
  // Query for piano Ordered parent list item
  const ol = container.querySelector("ol");
  expect(ol.innerHTML).toBe('<li class="charland">C</li><li class="darkeys"></li><li class="charland fill">D</li><li class="darkeys"></li><li class="charland fill">E</li><li class="darkeys"></li><li class="charland fill">F</li><li class="charland">G</li><li class="darkeys"></li><li class="charland fill">A</li><li class="darkeys"></li><li class="charland fill">B</li>');
});

it('Piano list items respond to clicks', () => {
  const onClick = jest.fn();
  act(() => {
    render(<PianoItems onClick={onClick} />, container);
  });
  // Query for piano Ordered first list item
  const ol = container.querySelector("ol");
  expect(ol.innerHTML).toBe('<li class="charland">C</li><li class="darkeys"></li><li class="charland fill">D</li><li class="darkeys"></li><li class="charland fill">E</li><li class="darkeys"></li><li class="charland fill">F</li><li class="charland">G</li><li class="darkeys"></li><li class="charland fill">A</li><li class="darkeys"></li><li class="charland fill">B</li>');

  act(() => {
    ol.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onClick).toHaveBeenCalledTimes(1);
});

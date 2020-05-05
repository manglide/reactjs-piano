import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Piano from '../components/Piano'
import PianoItems from '../components/PianoItems'
import Player from '../components/Player'

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


it('Piano list items when clicked changes the logger element innerHTML', () => {
  const onClick = jest.fn();
  act(() => {
    render(
        <div>
          <PianoItems onClick={onClick} />
          <Player />
        </div>,
        container
      );
  });

  // Query for piano Ordered first list item
  const li = container.querySelectorAll("li")[0];
  // The expected log value for the item clicked
  const expectedLoggerValue = li.textContent;
  // Ensure were picking the first Item
  expect(li.textContent).toBe(expectedLoggerValue);

  act(() => {
    li.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  // Simulate Click
  expect(onClick).toHaveBeenCalledTimes(1);

  // Query for Logger Input Element
  const logger = container.querySelector("[data-testid=logger]");
  // Inspect
  expect(logger.textContent).toBe(expectedLoggerValue)
});

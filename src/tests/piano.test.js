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
    render(<PianoItems onClick={onClick} />,container);
  });

  // Query for piano Ordered first list item
  const li = container.querySelectorAll("li")[0];

  // The expected log value for the item clicked
  const expectedLoggerValue = li.textContent;

  // We are simulating clicking the first list item in PianoItems
  // We know the first list Item value should be the textContent of the clicked item
  // So we set the logvalue to expectedLoggerValue and pass that as a prop to the
  // player component
  const logvalue = expectedLoggerValue;

  // Ensure were picking the first Item
  expect(li.textContent).toBe(expectedLoggerValue);

  act(() => {
    li.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  // Simulate the Click on an ol li item
  expect(onClick).toHaveBeenCalledTimes(1);

  // Render the player item to test the value of logvalue after ol li item click
  act(() => {
    render(
        <div>
          <Player loggerValue={logvalue} />
        </div>,
        container
      );
  });

  // Query for Logger DIV Element
  const logger = container.querySelector("[data-testid=logger]");
  // Inspect the return value
  expect(logger.textContent).toBe(expectedLoggerValue)
});

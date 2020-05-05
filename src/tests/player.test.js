import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Player from '../components/Player'

let container = null
beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove();
  container = null
})

it('renders the player component properly without errors', () => {
  act(() => {
    render(<Player />, container)
  });
})

it('test the generate button', () => {
  const onClick = jest.fn();
  act(() => {
    render(<Player generateTransition={onClick} />, container)
  });
  const button = container.querySelector("button");
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  // Simulate the Click on the Generate Element
  expect(onClick).toHaveBeenCalledTimes(1);
});

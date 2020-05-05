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

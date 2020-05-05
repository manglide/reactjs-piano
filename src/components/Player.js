import React from 'react'

/** @function
 * @name Player */
export default function Player(props) {
  return (
    <div className="player">
        <div data-testid="logger">{props.loggerValue}</div>
        <input name="player" value={props.userInputsValue} onChange={props.userInputAction} type="text" />
        <button className="btn btn-player" onClick={props.generateTransition}>Animate</button>
    </div>
  )
}

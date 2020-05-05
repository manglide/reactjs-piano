import React from 'react'

/** @function
 * @name Player */
export default function Player(props) {
  return (
    <div className="player">
        <input type="text" readOnly value={props.loggerValue} />
        <input name="player" onChange={props.userInputAction} type="text" />
        <button className="btn btn-player" onClick={props.generateTransition}>Animate</button>
    </div>
  )
}

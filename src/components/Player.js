import React from 'react'
import Button from './Button'
import Input from './Input'

/** @function
 * @name Player */
export default function Player(props) {
  return (
    <div className="player">
        <div data-testid="logger">{props.loggerValue}</div>
        <Input changingValue={props.userInputsValue} onChangeHandler={props.userInputAction} />
        <Button clickHandler={props.generateTransition} />
    </div>
  )
}

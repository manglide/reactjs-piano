import React from 'react'

export default function Input(props) {
  return(
    <input
      name="player"
      type="text"
      value={props.changingValue}
      onChange={props.onChangeHandler}
      />
  )
}

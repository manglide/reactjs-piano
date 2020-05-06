import React from 'react'

export default function Button(props) {
  return (
    <button
      className="btn btn-player"
      onClick={props.clickHandler}>
      Animate
    </button>
  )
}

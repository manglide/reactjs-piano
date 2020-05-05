import React from 'react'

/** @function
 * @name PianoItems */
export default function PianoItems(props) {
  return(
    <ol onClick={props.onClick}>
      <li className={`${props.selected === 'c' ? 'selected charland' : 'charland'}`}>C</li>
      <li className="darkeys"></li>
      <li className={`${props.selected === 'd' ? 'selected charland fill' : 'charland fill'}`}>D</li>
      <li className="darkeys"></li>
      <li className={`${props.selected === 'e' ? 'selected charland fill' : 'charland fill'}`}>E</li>
      <li className="darkeys"></li>
      <li className={`${props.selected === 'f' ? 'selected charland fill' : 'charland fill'}`}>F</li>
      <li className={`${props.selected === 'g' ? 'selected charland' : 'charland'}`}>G</li>
      <li className="darkeys"></li>
      <li className={`${props.selected === 'a' ? 'selected charland fill' : 'charland fill'}`}>A</li>
      <li className="darkeys"></li>
      <li className={`${props.selected === 'b' ? 'selected charland fill' : 'charland fill'}`}>B</li>
    </ol>
  )
}

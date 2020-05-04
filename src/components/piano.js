import React, { useState } from 'react'

import '../assets/css/piano.css';

export default function Piano(props) {
  const [logvalue, setLogValue] = useState('')
  const handleClick = (event) => {
    setLogValue(event.target.innerHTML)
  }
  return (
    <div>
      <ul onClick={handleClick}>
        <li className="charland">C</li>
        <li className="darkeys"></li>
        <li className="charland fill">D</li>
        <li className="darkeys"></li>
        <li className="charland fill">E</li>
        <li className="darkeys"></li>
        <li className="charland fill">F</li>
        <li className="charland">G</li>
        <li className="darkeys"></li>
        <li className="charland fill">A</li>
        <li className="darkeys"></li>
        <li className="charland fill">B</li>
      </ul>
      <div className="log">
        <label htmlFor="logger">Log: </label>
        <input id="logger" type="text" readOnly value={logvalue} className="logger" />
      </div>
      <div className="player">
        <input type="text" />
      </div>
    </div>
  )
}

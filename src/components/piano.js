import React from 'react'

import '../assets/css/piano.css';
import PianoItems from './PianoItems'
import Player from './Player'
import ErrorBoundary from '../errors'

/** @function
 * @name Piano */
export default function Piano() {
  // default value for our logger. Input read-only element
  const [logvalue, setLogValue] = React.useState('')
  // user supplied comma delimited Input Element
  const [userinputs, setUserInputs] = React.useState('')
  // set the selectd character variable so we can access it in component
  const [selected, setSelected] = React.useState('')
  // Reference to each SetTimeout ID
  const [timeoutID, setTimeoutID] = React.useState(null)

  /**
  * Array for which we want to handle selected operations upon and also
  * keys of the Piano
  * @kind constant
  */
  const chars = ['c','d','e','f','g','a','b'];

  /**
  * Capture user clicks and set list item text as read-only input element value
  *  Sets logvalue variable
  * @param {object} - javascript synthetic event
  * @kind constant
  */
  const handleClick = (event) => {
    setLogValue(event.target.innerHTML)
  }

  /**
  * Capture every user supplied data and store in the userinputs variable
  * @param {object} - javascript synthetic event
  * @kind constant
  */
  const userInputAction = (event) => {
    setUserInputs(event.target.value)
  }

  /**
  * Main Key Highlighter function
  */
  const highlightKeys = () => {
    // Check if the string matches expected behavior
    if (userinputs.indexOf(',') > -1) {
      // Split the user supplied input only in the presence of a comma
      // and loop through the returned array elements
       userinputs.split(',').forEach((element) => {
         // trim character by removing white space from both ends of literal
         element = element.trim().toLowerCase();
         // search through the piano chars array variable if element matches any element within array
         if(chars.indexOf(element) !== -1) {
           // If match, call setSelected to set current matched item.
           // This adds the css class 'selected' to the listitem
           // which subsequently sets the background color and fading transition
           setSelected(element);
           // call 'highlighterTimeout' to remove the selected class on the current item
           // setSelected is called with an empty string
           highlighterTimeout(element)
         }
       });
    }
  }

  /**
  * Highlighter timeout function sets the delay between intervals in highlighting a piano key
  * Reset setSelected to initial state by calling it with an empty string
  * @param {char} char - The matched character literal passed in and resolved from highlightKeys function
  * @param {int} i - The difference between each iterable  resolved to 1 second for frame render
  * @kind constant
  */
  const highlighterTimeout = (char) => {
    setTimeoutID(setTimeout(() => { clearTimeout(timeoutID); setSelected('') }, 1000))
  }

  return (
    <div className="wrapper">
      <ErrorBoundary>
        <div>
          <PianoItems onClick={handleClick} selected={selected} />
          <Player loggerValue={logvalue} userInputAction={userInputAction} userInputsValue={userinputs} generateTransition={highlightKeys} />
        </div>
      </ErrorBoundary>
    </div>
  )
}

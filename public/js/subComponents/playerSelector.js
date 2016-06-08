import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

//lot of help with moving es5 selector state change syntax to es6 found at http://stackoverflow.com/q/30720620

// "Uncaught TypeError: node.getBoundingClientRect is not a function" seems to be an open issue, https://github.com/facebook/react-devtools/issues/362
export default class PlayerSelector extends React.Component {
  //previously tried to handle state change here, which was bad. state change handling moved to site.js with "this" binding and update function

  // had
  // ref = "playerSelection"
  // inside <select> but don't think i needed it? keeping here in case funny business happens and i did need it
  render() {

    return(
      <div id = "playerSelectorContainer">
        <label>How many Players?
        <select

          value = {this.props.value}
          onChange = {this.props.updateNumberOfPlayers}
          >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>

        </select>
        </label>
      </div>
    )

  }
}

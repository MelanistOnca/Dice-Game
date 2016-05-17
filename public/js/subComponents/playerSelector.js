import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

//lot of help with moving es5 selector state change syntax to es6 found at http://stackoverflow.com/q/30720620

// "Uncaught TypeError: node.getBoundingClientRect is not a function" seems to be an open issue, https://github.com/facebook/react-devtools/issues/362
export default class PlayerSelector extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedValue: "1"
    }

    // binding 'this' to give correct context
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({selectedValue: event.target.value})

  }

  render() {

    return(
      <div id="playerSelectorContainer">
        <select
          value = {this.state.selectedValue}
          onChange = {this.handleChange}
          >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>

        </select>

      </div>
    )

  }
}

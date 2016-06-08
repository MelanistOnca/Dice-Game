

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class SidesSelector extends React.Component {


  render(){


    return(


      <div id="sidesSelectorContainer">
        <label>Select dice sides:
        <select
          value = {this.props.value}
          onChange = {this.props.updateSides}
          >
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="20">20</option>

        </select>
        </label>
      </div>
    )
  }
}

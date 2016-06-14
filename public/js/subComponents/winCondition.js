import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';


export default class WinCondition extends React.Component{

  render(){

    return(
      <div id = "winConditionContainer">
        <label> First to &nbsp;
        <select
          value = {this.props.value}
          onChange = {this.props.updateWinCondition}
          >
          <option value = "1">1</option>
          <option value = "2">2</option>
          <option value = "3">3</option>
          <option value = "4">4</option>
          <option value = "5">5</option>
        </select> &nbsp;
         points wins!
        </label>
      </div>
    )
  }
}

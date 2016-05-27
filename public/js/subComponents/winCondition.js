import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

//components
// import WinSelect from './winSelect'
// console.log('before export in winCondition.js');
export default class WinCondition extends React.Component{



  render(){

    // console.log(this.props, 'was this.props in winCondition.js');

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

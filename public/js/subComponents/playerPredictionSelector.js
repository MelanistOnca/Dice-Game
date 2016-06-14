import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class PredictionSelector extends React.Component{

  render(){


    let playerArrayNumber = this.props.playerNumber-1;
    let sides = parseInt(this.props.maxDiceSideNumber);
    let options = [];

    for (let i=1;i < sides+1;i++){
      let uniKey = `${i}PlayerPrediction${new Date().getTime()}`;

      let iMoney = `${i}`; //probably inefficient? but didn't like having {i+""} in the option value, and `${i}` didn't seem to work there.
      options.push(
        <option
          value = {iMoney}
          key = {uniKey}
          id = {uniKey}
          >{i}</option>
      )
    }

    
    let thisPlayerValue = this.props.playerPredictedValue[this.props.playerNumber-1]

    return(
      <div id={this.props.id}>
        <select
          value = {thisPlayerValue}
          onChange = { this.props.updatePlayerPredictedValue.bind(event,playerArrayNumber)}
          >
          {options}
        </select>
      </div>
    )
  }
}

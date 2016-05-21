import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class PredictionSelector extends React.Component{

  render(){

    // console.log(this.props.maxDiceSideNumber, 'this.props.setMaxDiceSideNumber in playerPredictionSelector');
    let playerArrayNumber = this.props.playerNumber-1;
    let sides = parseInt(this.props.maxDiceSideNumber);
    let options = [];

    for (let i=1;i<sides+1;i++){
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

    // <option value = "this will need to be dynamically generated.">temp</option>//these need to be generated based on dice sides selected.
    // <option value = "temp2">temp2</option>
    // console.log(this.props.playerPredictedValue,'was this.props.playerPredictedValue in playerPredictionSelector'); //coming back as undefined
    console.log(this.props.playerNumber, 'was this.props.playerNumber in playerPredictionSelector.js');
    console.log(this.props.playerPredictedValue[this.props.playerNumber-1],'was this.props.playerPredictedValue[this.props.playerNumber-1] in playerPredictionSelector');
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

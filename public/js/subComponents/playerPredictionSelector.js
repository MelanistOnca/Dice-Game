import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class PredictionSelector extends React.Component{

  //EVENT BEING A DICKHEAD IN THE ONCHANGE IM TRYING TO PASS THROUGH. event doesn't seem to get passed to the updatePlayerPredictedValue in site.js

  updatePPV(playerPredictedValue,event){

    // console.log(this.props,'this.props in update PPV in PlayerPredictionSelector.js');
    // let playerArrayNumber = (this.props.playerNumber)-1;
    console.log(event, 'was event in updatePPV');
    console.log(playerPredictedValue,'was playerPredictedValue in updatePPV');
    // this.props.updatePlayerPredictedValue.bind(this,event,playerArrayNumber)
    console.log(this.props,'was this.props in updatePPV');
    this.props.updatePlayerPredictedValue();

  }

  render(){
    // console.log(this.props,'this.props in render in PlayerPredictionSelector.js');



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
    let playerArrayNumber = (this.props.playerNumber)-1;
    // console.log(this,'this in PlayerPredictionSelector');
    // onChange = {this.props.updatePlayerPredictedValue.bind(this,event,playerArrayNumber), this.updatePPV.bind(event,playerArrayNumber)}

    return(
      <div id={this.props.id}>
        <select
          value = {thisPlayerValue}
          onChange = { this.updatePPV.bind(event,playerArrayNumber)}
          >
          {options}
        </select>
      </div>
    )
  }
}

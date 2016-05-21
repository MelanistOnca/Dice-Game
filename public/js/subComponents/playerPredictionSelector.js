import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class PredictionSelector extends React.Component{

  render(){

    console.log(this.props.maxDiceSideNumber, 'this.props.setMaxDiceSideNumber in playerPredictionSelector');
    let playerArrayNumber = this.props.playerNumber-1;

    return(
      <div id={this.props.id}>
        <select
          value = {this.props.value}
          onChange = { this.props.updatePlayerPredictedValue.bind(event,playerArrayNumber)}
          >
          <option value = "this will need to be dynamically generated.">temp</option>//these need to be generated based on dice sides selected.
          <option value = "temp2">temp2</option>
        </select>
      </div>
    )
  }
}

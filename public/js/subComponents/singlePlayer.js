

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

//components
import PredictionSelector from './playerPredictionSelector'

export default class SinglePlayer extends React.Component {



  render() {

    return(
      <div
        id = {`${this.props.id}PlayerContainer`}
        className = "singlePlayer"
        >
        Make your pick, player number {this.props.playerNumber}
        <PredictionSelector
          id = {`${this.props.id}SelectorContainer`}
          playerPredictedValue = {this.props.playerPredictedValue}
          updatePlayerPredictedValue = {this.props.updatePlayerPredictedValue}
          playerNumber = {this.props.playerNumber}
          maxDiceSideNumber = {this.props.maxDiceSideNumber}
          />
      </div>
    )
  }
}

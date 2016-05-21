

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

//components
import PredictionSelector from './playerPredictionSelector'

export default class SinglePlayer extends React.Component {


// now i need to add the dice value selection here.
  render() {
    //screwing up something here, update is not working correctly?

    return(
      <div
        id = {`${this.props.id}PlayerContainer`}
        className = "singlePlayer"

        >
        hello, player number {this.props.playerNumber}
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

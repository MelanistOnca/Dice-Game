

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class SinglePlayer extends React.Component {


// now i need to add the dice value selection here.
  render() {
    //screwing up something here, update is not working correctly?
    let playerArrayNumber = this.props.playerNumber-1;
    return(
      <div
        id = {`${this.props.id}PlayerContainer`}
        className = "singlePlayer"

        >
        hello, player number {this.props.playerNumber}
        <select
          value = "0"
          onChange = { this.props.updatePlayerPredictedValue.bind(event,playerArrayNumber)}
          >
          <option value = "temp">temp</option>//these need to be generated based on dice sides selected.
          <option value = "temp2">temp2</option>
        </select>
      </div>
    )
  }
}

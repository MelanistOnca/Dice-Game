import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

//components

import Result from './result';
import Tally from './tally';

export default class Scoreboard extends React.Component {


  render(){

    return(
      <div
        id = "resultAndTallyContainer"
        >
        <Tally
          playerWins = {this.props.playerWins}
          selectedPlayerValue = {this.props.selectedPlayerValue}
          />
        <Result
          diceResult = {this.props.diceResult}
          />
      </div>
    )
  }
}

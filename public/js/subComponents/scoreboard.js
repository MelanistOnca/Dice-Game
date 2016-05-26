import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

//components

import Result from './result';
import Tally from './tally';

export default class Scoreboard extends React.Component {


  render(){


    // props:
    //   this.props.diceResult,
    //   this.props.playerWins,
    //   this.props.selectedPlayerValue
    console.log(this.props.diceResult, 'was this.props.diceResult');


    //kind of awkward phrasing in the <p></p> below.
    // also interesting that the </p> above set the linter back to "correct" highlighting
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

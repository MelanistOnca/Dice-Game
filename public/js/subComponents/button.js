
import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class Button extends React.Component {

  // props:
  //   this.props.playerPredictedValue,
  //   this.props.diceResult,
  //   this.props.playerWins
  onClick(event){
    //check each players predicted value vs the dice result

    //if match, increment wins for that player.

    //need result component to show wins status.
    //need another component to show what win condition is. possibly another to set it.

  }
  render(){


    return(
      <div
        id = "rollButtonContainer"
        >
        <button
          id = "rollButton"
          onClick = {this.onClick}
          >
          ROLL
        </button>
      </div>
    )
  }
}

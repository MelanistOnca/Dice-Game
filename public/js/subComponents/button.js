
import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class Button extends React.Component {

  // props:
  //   this.props.playerPredictedValue,
  //   this.props.diceResult,
  //   this.props.playerWins
  rollTheDice(){
    let diceSides = parseInt(this.props.selectedDiceSidesValue);

    return Math.ceil( (Math.random()*diceSides) )
  }
  onClick(event){
    //generate random integer for sized dice
    let result = this.rollTheDice();
    //check each players predicted value vs the dice result
    let playerNum = parseInt(this.props.selectedPlayerValue);
    let playerPred = this.props.playerPredictedValue;
    let wins = this.props.playerWins;
    for(let i=0; i<playerNum;i++){
      // console.log( playerPred[i],result, (playerPred[i]===result), 'was playerPred[i],result, (playerPred[i]===result) before if');
      if(playerPred[i]===result){
        wins[i]++;
      }
      // console.log(playerPred[i],'was playerPred[i]');
      // console.log(wins[i],'was wins[i]');

    }
    console.log(playerPred,'was playerPred');
    console.log(wins, 'was wins');

    //if match, increment wins for that player.

    //need result component to show wins status. //this will also show dice roll.
    this.props.updateDiceResult(result)
    //need another component to show what win condition is. possibly another to set it.

  }
  render(){


    return(
      <div
        id = "rollButtonContainer"
        >
        <button
          id = "rollButton"
          onClick = {this.onClick.bind(this)}
          >
          ROLL
        </button>
      </div>
    )
  }
}

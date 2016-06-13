
import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class RollButton extends React.Component {

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
    let winCond = this.props.winCondition;

    //do i need all this variable declaration? can i just use the props directly? which is better? note: will likely need to keep at LEAST the result var for check below to "hold it".

    for(let i = 0; i < playerNum;i++){
      // console.log( playerPred[i],result, (playerPred[i]===result), 'was playerPred[i],result, (playerPred[i]===result) before if');
      if(playerPred[i] === result){
        wins[i]++;
      }


    }


    //if match, increment wins for that player.
    // console.log(this.props, 'this.props in rollButton.js');
    for(let u=0; u < playerNum;u++){

      if(winCond === wins[u]){
        this.props.updateGameFinish()
      }

    }
    //need result component to show wins status. //this will also show dice roll.
    this.props.updateDiceResult(result)
    //need another component to show what win condition is. possibly another to set it.


  }
  render(){

    //should disappear unless "gameStarted" state in site is true.

    let gameRBcheck;
    if(this.props.gameStarted){
      gameRBcheck =
      <button
        id = "rollButton"
        onClick = {this.onClick.bind(this)}
        >
        ROLL
      </button>
    } else if(this.props.gameFinished){
      <div></div>
    } else {
      <div></div>
    }

    return(
      <div
        id = "rollButtonContainer"
        >
        {gameRBcheck}
      </div>
    )
  }
}

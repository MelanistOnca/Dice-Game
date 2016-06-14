
import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class RollButton extends React.Component {


  rollTheDice(){
    let diceSides = parseInt(this.props.selectedDiceSidesValue);
    return Math.ceil( (Math.random()*diceSides) )
  }
  onClick(event){
    //generate random integer for sized dice
    let result = this.rollTheDice();

    let playerNum = parseInt(this.props.selectedPlayerValue);
    let playerPred = this.props.playerPredictedValue;
    let wins = this.props.playerWins;
    let winCond = this.props.winCondition;

    //do i need all this variable declaration? can i just use the props directly? which is better? note: will likely need to keep at LEAST the result var for check below to "hold it".

    //check each players predicted value vs the dice result
    for(let i = 0; i < playerNum;i++){
      //if match, increment wins for that player.
      if(playerPred[i] === result){
        wins[i]++;
      }
    }

    //when winning # of points scored, game is finished
    for(let u=0; u < playerNum;u++){
      if(winCond === wins[u]){
        this.props.updateGameFinish()
      }
    }

    //show dice result. should i have this up with rollTheDice()?
    this.props.updateDiceResult(result)



  }
  render(){

    //should disappear unless "gameStarted" state in site component is true.

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

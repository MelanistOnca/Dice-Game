import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class GameSetup extends React.Component{

  render(){


    let gameState;
    let pointsPlurality;

    if((this.props.winCondition===1)){
      pointsPlurality =
      <div>Win the game by getting {this.props.winCondition}&nbsp; point!</div>
    } else {
      pointsPlurality =
      <div>Win the game by getting {this.props.winCondition}&nbsp; points!</div>
    }


    if(this.props.gameStarted){
      gameState =
      <div
        id = "gameStateListContainer"
        >
        <div>This game is using {this.props.selectedDiceSidesValue}&nbsp; sided dice.</div>
        <div>There are {this.props.selectedPlayerValue}&nbsp; players for this game.</div>
        {pointsPlurality}

      </div>
    } else{
      <div></div>
    }


    return(
      <div
        id = "gameSetupContainer"
        >

        {gameState}
      </div>
    )
  }
}

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class GameSetup extends React.Component{

  // need
  // this.props.gameFinished //when true, disappear status div
  // this.props.gameStarted //when true, show game status. //do i want to confirm with both game finished and game started for both of these?
  // this.props.selectedDiceSidesValue //to state number of dice sides "6 sided dice are being used"
  // this.props.selectedPlayerValue //to state the number of players
  // this.props.winCondition //to state the number of points needed to win the game/round

  render(){

    //make return conditional on "start game" having been pressed, and show what the current ruleset is.
    let gameState;
    let pointsPlurality;

    if((this.props.winCondition===1)){
      pointsPlurality =
      <div>Win the game by getting {this.props.winCondition}&nbsp; point!</div>
    } else {
      pointsPlurality =
      <div>Win the game by getting {this.props.winCondition}&nbsp; points!</div>
    }

    //list styling here seems off-center? tinker.
    
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

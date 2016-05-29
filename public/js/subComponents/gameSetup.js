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
    //list styling here seems off-center? tinker.

    if(this.props.gameStarted){
      gameState =
      <ul
        id = "gameStateListContainer"
        >
        <li>This game is using {this.props.selectedDiceSidesValue} sided dice.</li>
        <li>There are {this.props.selectedPlayerValue} players for this game.</li>
        <li>Win the game by getting {this.props.winCondition} points!</li>
      </ul>
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

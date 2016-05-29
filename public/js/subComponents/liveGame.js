import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

//components
import GameSetup from './gameSetup';
// import AllPlayers from './allPlayers';
// import RollButton from './rollButton';
import Scoreboard from './scoreboard';
import RunningGame from './runningGame';


export default class LiveGame extends React.Component{



  render(){

    let liveGame;

    if(this.props.gameStarted){
      liveGame =
      <div>
        <GameSetup
          gameFinished = {this.props.gameFinished}
          gameStarted = {this.props.gameStarted}
          selectedDiceSidesValue = {this.props.selectedDiceSidesValue}
          selectedPlayerValue = {this.props.selectedPlayerValue}
          winCondition = {this.props.winCondition}
          />
        <RunningGame
          playersNumber = {this.props.selectedPlayerValue}
          updatePlayerPredictedValue = {this.props.updatePlayerPredictedValue}
          playerPredictedValue = {this.props.playerPredictedValue}
          maxDiceSideNumber = {this.props.selectedDiceSidesValue}
          gameStarted = {this.props.gameStarted}
          selectedPlayerValue =  {this.props.selectedPlayerValue}
          selectedDiceSidesValue = {this.props.selectedDiceSidesValue}
          diceResult = {this.props.diceResult}
          playerWins = {this.props.playerWins}
          updateDiceResult = {this.props.updateDiceResult}
          winCondition = {this.props.winCondition}
          updateGameFinish = {this.props.updateGameFinish}
          gameFinished = {this.props.gameFinished}
          />

        <Scoreboard
          diceResult = {this.props.diceResult}
          playerWins = {this.props.playerWins}
          selectedPlayerValue = {this.props.selectedPlayerValue}
          gameFinished = {this.props.gameFinished}
          />
      </div>
    } else{
      liveGame = <div></div>
    }
    //propsify



    //end of props-ification

    return(
      <div
        id = "liveGameContainer"
        >
        {liveGame}
      </div>
    )
  }
}

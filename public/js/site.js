// basics
import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

// components
import Test from './test';
import AllPlayers from './subComponents/allPlayers';
import RollButton from './subComponents/rollButton';
import ConfigSettings from './subComponents/configSettings';
import Victory from './subComponents/victory';
import PlayAgain from './subComponents/playAgain';
import LiveGame from './subComponents/liveGame';


export default class Site extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      gameStarted: false,
      selectedPlayerValue: 1,
      selectedDiceSidesValue: 2,
      playerPredictedValue: [1,1,1,1,1],
      diceResult: 0,
      playerWins: [0,0,0,0,0],
      //i want to have the player number determined dynamically, but running into some issues trying to implement that. since dropdown for player number tops out at 5, i'm setting the array lengths here. //this is a feature i'm probably not going to implement, really 5 people is plenty.
      winCondition: 1,
      gameFinished: false,
      gameRestarted: false
    }
    //a whole lot of this binding. there has to be a way to group this into a single line or something, right?
    //look in to this for future update.
    this.updateGameStart = this.updateGameStart.bind(this)
    this.updateNumberOfPlayers = this.updateNumberOfPlayers.bind(this);
    this.updateSides = this.updateSides.bind(this);
    this.updatePlayerPredictedValue = this.updatePlayerPredictedValue.bind(this);
    this.updateDiceResult = this.updateDiceResult.bind(this);
    this.updateWinCondition = this.updateWinCondition.bind(this);
    this.updateGameStart = this.updateGameStart.bind(this);
    this.resetGameToStart = this.resetGameToStart.bind(this);
    this.updateGameFinish = this.updateGameFinish.bind(this);
  }


  updateGameStart(event){
    this.setState(
      {
        gameStarted: true
      }
    )
  }
  updateGameFinish(){
    this.setState(
      {
        gameFinished: true
      }
    )
  }
  resetGameToStart(event){

    this.setState(
      {
        gameStarted: false,
        gameFinished: false,
        playerWins: [0,0,0,0,0]
      }
    )
  }
  updateNumberOfPlayers(event){


    this.setState(
      {
        selectedPlayerValue: parseInt(event.target.value)

      }
    )
  }
  updateSides(event){
    this.setState(
      {
        selectedDiceSidesValue: parseInt(event.target.value)
      }
    )
  }

  updateWinCondition(event){
    this.setState(
      {
        winCondition: parseInt(event.target.value)
      }
    )
  }

  updatePlayerPredictedValue(playerArrayNumber, event){

    this.state.playerPredictedValue[playerArrayNumber]=parseInt(event.target.value);

    this.setState(
      {
        playerPredictedValue: this.state.playerPredictedValue
      }
    )
  }

  updateDiceResult(roll){
    this.setState(
      {
        diceResult: parseInt(roll)
      }
    )
  }

  render() {


    return (
      <div
        id = "siteContainer"
        >
        <ConfigSettings
          gameStarted = {this.state.gameStarted}
          updateGameStart = {this.updateGameStart}

          updateNumberOfPlayers = {this.updateNumberOfPlayers}
          SPvalue = {this.state.selectedPlayerValue}

          updateSides = {this.updateSides}
          SDSvalue = {this.state.selectedDiceSidesValue}

          updateWinCondition = {this.updateWinCondition}
          WCvalue = {this.state.winCondition}
          />

        <LiveGame
          gameFinished = {this.state.gameFinished}
          gameStarted = {this.state.gameStarted}
          selectedDiceSidesValue = {this.state.selectedDiceSidesValue}
          selectedPlayerValue = {this.state.selectedPlayerValue}
          winCondition = {this.state.winCondition}
          playersNumber = {this.state.selectedPlayerValue}
          updatePlayerPredictedValue = {this.updatePlayerPredictedValue}
          playerPredictedValue = {this.state.playerPredictedValue}
          maxDiceSideNumber = {this.state.selectedDiceSidesValue}
          diceResult = {this.state.diceResult}
          playerWins = {this.state.playerWins}
          updateDiceResult = {this.updateDiceResult}
          updateGameFinish = {this.updateGameFinish}
          />
        <Victory
          playerWins = {this.state.playerWins}
          winCondition = {this.state.winCondition}
          selectedPlayerValue = {this.state.selectedPlayerValue}
          gameFinished = {this.state.gameFinished}
          />
        <PlayAgain
          gameStarted = {this.state.gameStarted}
          resetGameToStart = {this.resetGameToStart}
          />


      </div>
    )
  }

}

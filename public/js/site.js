// basics
import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

// components
import Test from './test';
import AllPlayers from './subComponents/allPlayers';

import RollButton from './subComponents/rollButton';
import ConfigSettings from './subComponents/configSettings';

import Scoreboard from './subComponents/scoreboard';
import Victory from './subComponents/victory';
import PlayAgain from './subComponents/playAgain';
import GameSetup from './subComponents/gameSetup';

export default class Site extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      gameStarted: false,
      selectedPlayerValue: 1,
      selectedDiceSidesValue: 2,
      playerPredictedValue: [1,1,1,1,1],
      diceResult: -1, //not 0 so that initial state checks dont register "wins". may not be necessary depending on how logic checks are made, which haven't been designed yet.
      playerWins: [0,0,0,0,0],
      //i want to have the player number determined dynamically, but running into some issues trying to implement that. since dropdown for player number tops out at 5, i'm setting the array lengths here.
      winCondition: 1,
      gameFinished: false,
      gameRestarted: false
    }
    //a whole lot of this binding. there has to be a way to group this into a single line or something, right?
    this.updateGameStart = this.updateGameStart.bind(this)
    this.updateNumberOfPlayers = this.updateNumberOfPlayers.bind(this);
    this.updateSides = this.updateSides.bind(this);
    this.updatePlayerPredictedValue = this.updatePlayerPredictedValue.bind(this);
    this.updateDiceResult = this.updateDiceResult.bind(this);
    this.updateWinCondition = this.updateWinCondition.bind(this);
    this.updateGameStart = this.updateGameStart.bind(this);
    this.resetGameToStart = this.resetGameToStart.bind(this);
  }

  // let val = event.target.value; //can i use this to replace event.target.value in all the functions below? test later. scoping may be problematic.

  updateGameStart(event){
    this.setState(
      {
        gameStarted: true
      }
    )
  }
  resetGameToStart(event){
    this.setState(
      {
        gameStarted: false
      }
    )
  }
  updateNumberOfPlayers(event){
    // console.log(event.target,'was event.target in site.js');
    // console.log(event.target.value,'was event.target.value in site.js');

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
    // console.log(event,'event');
    // console.log(playerArrayNumber, 'was playerArrayNumber in updatePPV in site.js');
    // console.log(this.state,'this.state in updatePPV in site.js');
    // let playerPredictedValueTemp=[];
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
    // console.log(this.state.winCondition,'was this.state.winCondition in site.js');
    // console.log(this.updateWinCondition,'was this.updateWinCondition in site.js');
    // console.log(this.state, 'was this.state in site.js');

    //above <AllPlayers/>


    //below <Victory/>
    // <PlayAgain
    //   {/* maybe this should just be a modified Button? */}
    //   />

    return (
      <div
        id = "siteContainer"
        >
        the site component loaded
        <Test
          gameStarted = {this.state.gameStarted}
          />

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

        <GameSetup
          gameFinished = {this.state.gameFinished}
          gameStarted = {this.state.gameStarted}
          selectedDiceSidesValue = {this.state.selectedDiceSidesValue}
          selectedPlayerValue = {this.state.selectedPlayerValue}
          winCondition = {this.state.winCondition}
          />

        <AllPlayers
          playersNumber = {this.state.selectedPlayerValue}
          updatePlayerPredictedValue = {this.updatePlayerPredictedValue}
          playerPredictedValue = {this.state.playerPredictedValue}
          maxDiceSideNumber = {this.state.selectedDiceSidesValue}
          />
        <Scoreboard
          diceResult = {this.state.diceResult}
          playerWins = {this.state.playerWins}
          selectedPlayerValue = {this.state.selectedPlayerValue}
          />
        <RollButton
          selectedPlayerValue =  {this.state.selectedPlayerValue}
          selectedDiceSidesValue = {this.state.selectedDiceSidesValue}
          playerPredictedValue = {this.state.playerPredictedValue}
          diceResult = {this.state.diceResult}
          playerWins = {this.state.playerWins}
          updateDiceResult = {this.updateDiceResult}
          />
        <Victory
          playerWins = {this.state.playerWins}
          winCondition = {this.state.winCondition}
          selectedPlayerValue = {this.state.selectedPlayerValue}
          />
        <PlayAgain
          resetGameToStart = {this.resetGameToStart}
          />

      </div>
    )
  }

}

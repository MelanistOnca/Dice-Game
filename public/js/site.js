// basics
import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

// components
import Test from './test';
import AllPlayers from './subComponents/allPlayers';
import PlayerSelector from './subComponents/playerSelector';
import SidesSelector from './subComponents/sidesSelector';
import Button from './subComponents/button';
import WinCondition from './subComponents/winCondition';
import Scoreboard from './subComponents/scoreboard';

export default class Site extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedPlayerValue: "1",
      selectedDiceSidesValue: "2",
      playerPredictedValue: [1,1,1,1,1],
      diceResult: -1, //not 0 so that initial state checks dont register "wins". may not be necessary depending on how logic checks are made, which haven't been designed yet.
      playerWins: [0,0,0,0,0],
      //i want to have the player number determined dynamically, but running into some issues trying to implement that. since dropdown for player number tops out at 5, i'm setting the array lengths here.
    }
    this.updateNumberOfPlayers = this.updateNumberOfPlayers.bind(this);
    this.updateSides = this.updateSides.bind(this);
    this.updatePlayerPredictedValue = this.updatePlayerPredictedValue.bind(this);
    this.updateDiceResult = this.updateDiceResult.bind(this);
  }
  updateNumberOfPlayers(event){
    // console.log(event.target,'was event.target in site.js');
    // console.log(event.target.value,'was event.target.value in site.js');
    let val = event.target.value;
    this.setState(
      {
        selectedPlayerValue: val,

      }
    )
  }
  updateSides(event){
    this.setState(
      {
        selectedDiceSidesValue: event.target.value
      }
    )
  }

  updatePlayerPredictedValue(playerArrayNumber, event){
    // console.log(event,'event');
    // console.log(playerArrayNumber, 'was playerArrayNumber in updatePPV in site.js');
    // console.log(this.state,'this.state in updatePPV in site.js');
    let playerPredictedValueTemp=[];
    this.state.playerPredictedValue[playerArrayNumber]=parseInt(event.target.value);

    this.setState(
      {
        placeholder: 'bla',
        playerPredictedValue: this.state.playerPredictedValue
      }
    )
  }

  updateDiceResult(roll){
    this.setState(
      {
        diceResult: roll
      }
    )
  }

  render() {

    return (
      <div
        id = "siteContainer"
        >
        the site component loaded
        <Test/>

        <PlayerSelector
          updateNumberOfPlayers = {this.updateNumberOfPlayers}
          value = {this.state.selectedPlayerValue}
          />
        <SidesSelector
          updateSides = {this.updateSides}
          value = {this.state.selectedDiceSidesValue}
          />
        <AllPlayers
          playersNumber = {this.state.selectedPlayerValue}
          updatePlayerPredictedValue = {this.updatePlayerPredictedValue}
          playerPredictedValue = {this.state.playerPredictedValue}
          maxDiceSideNumber = {this.state.selectedDiceSidesValue}
          />
        <Button
          selectedPlayerValue =  {this.state.selectedPlayerValue}
          selectedDiceSidesValue = {this.state.selectedDiceSidesValue}
          playerPredictedValue = {this.state.playerPredictedValue}
          diceResult = {this.state.diceResult}
          playerWins = {this.state.playerWins}
          updateDiceResult = {this.updateDiceResult}
          />
        <WinCondition

          />
        <Scoreboard
          diceResult = {this.state.diceResult}
          playerWins = {this.state.playerWins}
          selectedPlayerValue = {this.state.selectedPlayerValue}
          />

      </div>
    )
  }

}

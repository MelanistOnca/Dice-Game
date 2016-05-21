// 'use strict'

// basics
import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

// components
import Test from './test';
import AllPlayers from './subComponents/allPlayers';
import PlayerSelector from './subComponents/playerSelector';
import SidesSelector from './subComponents/sidesSelector';

export default class Site extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedPlayerValue: "1",
      selectedDiceSidesValue: "2",
      playerPredictedValue: [0,0,0,0,0],
      playerWins: [0,0,0,0,0],
      //i want to have the player number determined dynamically, but running into some issues trying to implement that. since dropdown for player number tops out at 5, i'm setting the array lengths here.
      placeholder: [,,,,,]

    }
    this.updateNumberOfPlayers = this.updateNumberOfPlayers.bind(this);
    this.updateSides = this.updateSides.bind(this);
    this.updatePlayerPredictedValue = this.updatePlayerPredictedValue.bind(this);
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
  // maxDiceSideNumber(){
  //   // return this.state.selectedDiceSidesValue;
  // }
  updatePlayerPredictedValue(playerArrayNumber, event){
    //not certain how to determine which PPV to update. do not want to write 5 copies of same function. need to pass the player id from the child to this function. can i have (event, this.props.playerNumber) as part of the onChange?
    // console.log(playerArrayNumber,'was playerArrayNumber in site.js');
    console.log(event,'event');
    console.log(playerArrayNumber, 'was playerArrayNumber in updatePPV in site.js');
    console.log(this.state,'this.state in updatePPV in site.js');
    let playerPredictedValueTemp=[];
    // playerPredictedValueTemp[playerArrayNumber] = event.target.value;
    this.state.playerPredictedValue[playerArrayNumber]=event.target.value

    this.setState(
      {
        // playerPredictedValue[playerArrayNumber]: 'test'
        // playerPredictedValue[playerArrayNumber]: event.target.value
        //[var] notation is not working here. i think i ran in to this before but don't remember the solution...
        placeholder: 'bla',
        playerPredictedValue: this.state.playerPredictedValue
      }
    )
  }


  render() {




    return(
      <div id="siteContainer">
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

      </div>
    )
  }
}

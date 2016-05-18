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
      playerPredictedValue: [], //this will need to update as players choose new values. careful so that playerPredictedValue[i] has i=selectedPlayerValue-1 total entries
      playerWins: [] //track number of wins of each player. should playerPredictedValue and playerWins be keys in a player: {} ? maybe? i'm thinking probably?
      //OOOOR players: [], where each item is an object with "predictedValue" and "wins" so that players[0] has { predictedValue: #, wins :#} for THAT player??!?!?
    }
    this.updateNumberOfPlayers = this.updateNumberOfPlayers.bind(this);
    this.updateSides = this.updateSides.bind(this);
  }
  updateNumberOfPlayers(event){
    // console.log(event.target,'was event.target in site.js');
    // console.log(event.target.value,'was event.target.value in site.js');
    this.setState(
      {
        selectedPlayerValue: event.target.value
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
          />

      </div>
    )
  }
}

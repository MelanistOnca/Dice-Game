
import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import SinglePlayer from './singlePlayer';

export default class AllPlayers extends React.Component {

  //render loop inspired by http://stackoverflow.com/a/22877049
  render() {
      console.log(this.props.playerPredictedValue,'was this.props.playerPredictedValue in allPlayers.js');//undefined. of course it would be, since no on predicted anything.
    let allPlayers = [];
    let numPlayers = parseInt(this.props.playersNumber); //this is determined by the dropdown selection.
    for (let i = 0; i < numPlayers; i++){
        let stamp = new Date().getTime();
        let uniqueStamp = `${i}${stamp}`;
      allPlayers.push(
        <SinglePlayer
          key = {uniqueStamp}
          id = {uniqueStamp}
          playerNumber = {i+1}
          updatePlayerPredictedValue = {this.props.updatePlayerPredictedValue}
          playerPredictedValue = {this.props.playerPredictedValue}
          maxDiceSideNumber = {this.props.maxDiceSideNumber}
          />
      )

    }


    //need to play with styling here. should be centered even with 1 player. currently left-aligned.
    return(


      <div id="playersContainer">
        {allPlayers}
      </div>

    )
  }
}


import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import SinglePlayer from './singlePlayer';

export default class AllPlayers extends React.Component {

  //render loop inspired by http://stackoverflow.com/a/22877049
  render() {
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

    let gameStatus;

    if(!this.props.gameFinished){
      gameStatus = allPlayers
    } else {
      gamestatus = <div></div>
    }


    return(


      <div id="playersContainer">
        {gameStatus}
      </div>

    )
  }
}

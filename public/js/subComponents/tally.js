import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

//components
import PlayerScore from './playerScore'

export default class Tally extends React.Component{


  render(){

    let allPlayersScore = [];
    let numPlayers = parseInt(this.props.selectedPlayerValue); //this is determined by the dropdown selection.

    for (let i = 0;i < numPlayers;i++){
        let stamp = new Date().getTime();
        let uniqueStamp = `${i}${stamp}`;
      allPlayersScore.push(
        <PlayerScore
          key = {uniqueStamp}
          id = {uniqueStamp}
          playerNumber = {i+1}
          playerWinsIndex = {i}
          playerWins = {this.props.playerWins}
          numPlayers ={numPlayers}
          />
      )

    }


    return(
      <div
        id = "tallyContainer"
        >
        {allPlayersScore}
      </div>
    )
  }
}

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

//components
import PlayerScore from './playerScore'

export default class Tally extends React.Component{


  render(){
    // props
    //   this.props.playerWins

    let allPlayersScore = [];
    let numPlayers = parseInt(this.props.selectedPlayerValue); //this is determined by the dropdown selection.



    console.log('line above for loop in tally.js');
    for (let i = 0;i < numPlayers;i++){
      console.log('inside for loop of tally.js');

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
    console.log(allPlayersScore, 'was allPlayersScore in tally.js');

    return(
      <div
        id = "tallyContainer"
        >
        {allPlayersScore}
      </div>
    )
  }
}

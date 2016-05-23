import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
// console.log('playerScore loaded');

export default class PlayerScore extends React.Component{


  render(){


    // props
    //   this.props.id
    //   this.props.playerNumber
    //   this.props.playerWins
    //   this.props.numPlayers

    // for (let i = 0; i < this.props.numPlayers; i++){
    //
    // }
    console.log(this.props.playerWins, 'was this.props.playerWins in playerScore.js');

    return(
      <div
        id = {`${this.props.id}PlayerScoreContainer`}

        >
        Player {this.props.playerNumber} has a score of {this.props.playerWins[this.props.playerWinsIndex]}
      </div>
    )
  }
}

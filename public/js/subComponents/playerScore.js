import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
// console.log('playerScore loaded');

export default class PlayerScore extends React.Component{


  render(){


    return(
      <div
        id = {`${this.props.id}PlayerScoreContainer`}
        className = "playerScoreContainer"
        >
        Player {this.props.playerNumber} has a score of {this.props.playerWins[this.props.playerWinsIndex]}
      </div>
    )
  }
}

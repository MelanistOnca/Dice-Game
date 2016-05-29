import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class PlayAgain extends React.Component{

  render(){

    
    //should probably be invisible until game is won? maybe not? may want to restart in the middle of a game if a bad setup choice was made.
    let restartCheck;

    if(this.props.gameStarted){
      restartCheck =
      <button
        id = "restartButton"
        onClick = {this.props.resetGameToStart}
        >
        Play Again
      </button>
    } else {
      restartCheck = <div></div>
    }

    //game is not restarting.

    return(
      <div
        id = "restartButtonContainer"
        >
        {restartCheck}

      </div>

    )
  }
}

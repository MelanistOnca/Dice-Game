import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class StartButton extends React.Component{



  render(){
    let startedSBcheck;

    if(!this.props.gameStarted){
      startedSBcheck = <div
        id = "startButtonContainer"
        >
        <button
          id = "startButton"
          onClick = {this.props.updateGameStart}
          >
          Start Game
        </button>

      </div>
    } else {
      startedSBcheck = <div></div>
    }
    return(
      <div>{startedSBcheck}</div>

    )
  }
}

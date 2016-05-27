import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class StartButton extends React.Component{


  render(){
    let started;
    
    if(!this.props.gameStarted){
      started = <div
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
      started = <div></div>
    }
    return(
      <div>{started}</div>

    )
  }
}

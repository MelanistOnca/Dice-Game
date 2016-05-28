import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class PlayAgain extends React.Component{

  render(){

    return(
      <div
        id = "restartButtonContainer"
        >
        <button
          id = "restartButton"
          onClick = {this.props.resetGameToStart}
          >
          Play Again
        </button>

      </div>

    )
  }
}

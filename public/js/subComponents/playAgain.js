import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class PlayAgain extends React.Component{

  render(){


    //this doesn't seem to be calling this.props.resetGameToStart
    console.log(this.props, 'was this.props in playAgain.js');//looks like i was passing the wrong function.

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

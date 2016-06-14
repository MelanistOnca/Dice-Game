import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class PlayAgain extends React.Component{

  render(){



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

    

    return(
      <div
        id = "restartButtonContainer"
        >
        {restartCheck}

      </div>

    )
  }
}

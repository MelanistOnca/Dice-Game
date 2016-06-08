import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

//components
import Victory from './victory';
import PlayAgain from './playAgain';


export default class FinishedGame extends React.Component{


  render(){



    //propsify

    let finishedGame;

    //end of props-ification
    if(this.gameFinished){
      finishedGame =
      <div>
        <Victory
          playerWins = {this.props.playerWins}
          winCondition = {this.props.winCondition}
          selectedPlayerValue = {this.props.selectedPlayerValue}
          gameFinished = {this.props.gameFinished}
          />

      </div>
    } else{
      finishedGame = <div></div>
    }

    return(
      <div
        id = "finishedGameContainer"
        >
        {finishedGame}
      </div>
    )
  }
}

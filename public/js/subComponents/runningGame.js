import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

//components
import AllPlayers from './allPlayers';
import RollButton from './rollButton';

export default class RunningGame extends React.Component{




  render(){




    //propsify



    //props-ification

    let progCheck;
    if(!this.props.gameFinished){
      progCheck =
      <div>
        <AllPlayers
          playersNumber = {this.props.selectedPlayerValue}
          updatePlayerPredictedValue = {this.props.updatePlayerPredictedValue}
          playerPredictedValue = {this.props.playerPredictedValue}
          maxDiceSideNumber = {this.props.selectedDiceSidesValue}
          gameStarted = {this.props.gameStarted}
          />
        <RollButton
          selectedPlayerValue =  {this.props.selectedPlayerValue}
          selectedDiceSidesValue = {this.props.selectedDiceSidesValue}
          playerPredictedValue = {this.props.playerPredictedValue}
          diceResult = {this.props.diceResult}
          playerWins = {this.props.playerWins}
          updateDiceResult = {this.props.updateDiceResult}
          winCondition = {this.props.winCondition}
          gameStarted = {this.props.gameStarted}

          updateGameFinish = {this.props.updateGameFinish}
          />
      </div>
    } else {
      progCheck = <div></div>
    }

    return(
      <div
        id = "gameInProgressContainer"
        >
        {progCheck}
      </div>
    )
  }
}

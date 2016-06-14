import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

//components
import PlayerSelector from './playerSelector';
import SidesSelector from './sidesSelector';
import WinCondition from './winCondition';
import StartButton from './startButton';

export default class ConfigSettings extends React.Component {



  render(){

    let config;

    if(!this.props.gameStarted){
      config =
      <div>
        <PlayerSelector
          updateNumberOfPlayers = {this.props.updateNumberOfPlayers}
          value = {this.props.SPvalue}

          />
        <SidesSelector
          updateSides = {this.props.updateSides}
          value = {this.props.SDSvalue}

          />
        <WinCondition
          updateWinCondition = {this.props.updateWinCondition}
          value = {this.props.WCvalue}

          />
        <StartButton
          updateGameStart = {this.props.updateGameStart}
          gameStarted = {this.props.gameStarted}
          />
        </div>
    } else {
      config = <div></div>
    }


    return(
      <div id = "configContainer">
        {config}
      </div>
    )
  }
}

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

//components
//playerSelector, sidesSelector, winCondition
import PlayerSelector from './playerSelector';
import SidesSelector from './sidesSelector';
import WinCondition from './winCondition';
import StartButton from './startButton';

export default class ConfigSettings extends React.Component {

  

  render(){
    // console.log(this.props, 'this.props in configSettings.js');
//start propsify

    //end props-ification of stuff from site.js
    let config;

    if(!this.props.gameStarted){
      config =
      <div>
        <StartButton
          updateGameStart = {this.props.updateGameStart}
          gameStarted = {this.props.gameStarted}
          />
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
        </div>
    } else {
      config = <div></div>
    }
    // console.log(config, 'config before return in configSettings.js');

    return(
      <div id = "configContainer">
        {config}
      </div>
    )
  }
}

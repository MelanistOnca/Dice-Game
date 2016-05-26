//think this is unnecessary now, part of win conidition by default. restructured layout to implement as such.

import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

//components
import VictoryMessage from './victoryMessage';

export default class Victory extends React.Component{


  render(){


    // props
    //   this.props.playerWins
    //   this.props.winCondition
    //   this.props.selectedPlayerValue

    //should only render when a victor is declared. should de-render roll button, and add new button below this for "play again?" probably want the selection dropdowns to disappear once roll has been made. maybe have "start game" button to determin that instead?

    //logic to determine winner(s)
    //loop through playerWins checking if playerWins===winCondition. render "player x wins" when player x has the requisite # of wins.
    //handle ties. create new var, let winners = 0; , if (winners > 1), tie declared, "We have a tie! players X,Y,... win!"
    let winners = 0;
    let winnersGroup = [];
    let tie = "a  tie happened, but the players weren't determined";


    for(let i = 0; i < this.props.selectedPlayerValue ; i++){
      if(this.props.playerWins[i] === this.props.winCondition){
        winners++;
      }
    } //might be able to refactor this loop and the below's loop into one pass/loop? consider for future update.


    if(winners > 1){
      console.log('winners>1 if started');
      winnersGroup.push(
        <VictoryMessage
          key = {"tieMessage"}
          id = {"tieMessage"}
          tie = {true}
          message = {"There has been a tie!"}
          />
      )

      for(let i = 0; i < this.props.selectedPlayerValue ; i++){
        if(this.props.playerWins[i] === this.props.winCondition){
          let stamp = new Date().getTime();
          let uniqueStamp= `${i}${stamp}`;
          winnersGroup.push(
            <VictoryMessage
              key = {uniqueStamp}
              id = {uniqueStamp}
              message = { `Player ${i+1} wins!` }
              />
          )
        }
      }
      console.log(winnersGroup, 'was winnersGroup');
    }

    return(
      <div id = "victoryStatusContainer">
        {winnersGroup}
      </div>

    )
  }
}

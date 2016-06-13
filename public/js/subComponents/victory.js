//think this is unnecessary now, part of win conidition by default. restructured layout to implement as such.

import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

//components
import VictoryMessage from './victoryMessage';

export default class Victory extends React.Component{

//this seems to have stopped working. check commit where it was working to see what differences
//switched the commented and uncommented sections, started working. reviewed both sections side by side and they appear to be the same. must be missing something that's different. since working now, leave as is and review later.
  render(){


    // props
    //   this.props.playerWins
    //   this.props.winCondition
    //   this.props.selectedPlayerValue

    //should only render when a victor is declared. should de-render roll button, and add new button below this for "play again?" probably want the selection dropdowns to disappear once roll has been made. maybe have "start game" button to determin that instead?

    //logic to determine winner(s)
    //loop through playerWins checking if playerWins===winCondition. render "player x wins" when player x has the requisite # of wins.
    //handle ties. create new var, let winners = 0; , if (winners > 1), tie declared, "We have a tie! players X,Y,... win!"
    // console.log(this.props, 'this.props in victory.js');
    let winners = 0;
    let winnersGroup = [];
    let winnersGroupFinal = [];
    let tie = "a  tie happened, but the players weren't determined";



    for(let i = 0; i < this.props.selectedPlayerValue ; i++){
      if(this.props.playerWins[i] === this.props.winCondition){
        winners++;
        // console.log('winners was incremented');
      }
    } //might be able to refactor this loop and the below's loop into one pass/loop? consider for future update.

    //these two winners checks are independent. One provides a tie message only when there is more than one winner, the other provides a player-specific message for one OR more winners.
    //checks for tie to provide tie win message
    if(winners > 1){

      winnersGroup.push(
        <VictoryMessage
          key = {"tieMessage"}
          id = {"tieMessage"}
          tie = {true}
          message = {"There has been a tie!"}
          />
      )
    }

    //checks for all winners to provide a "THAT PLAYER wins" message
    if (winners >= 1){
      // console.log('when winners are >= 1');
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
    }


    // for(let i = 0; i < this.props.selectedPlayerValue ; i++){
    //   if(this.props.playerWins[i] === this.props.winCondition){
    //     winners++;
    //   }
    // } //might be able to refactor this loop and the below's loop into one pass/loop? consider for future update. the winners>1 positioning makes this less easy than it may first appear? need to whiteboard it at some point.
    //
    //
    // if(winners > 1){
    //
    //   winnersGroup.push(
    //     <VictoryMessage
    //       key = {"tieMessage"}
    //       id = {"tieMessage"}
    //       tie = {true}
    //       message = {"There has been a tie!"}
    //       />
    //   )
    //
    //   for(let i = 0; i < this.props.selectedPlayerValue ; i++){
    //     if(this.props.playerWins[i] === this.props.winCondition){
    //       let stamp = new Date().getTime();
    //       let uniqueStamp= `${i}${stamp}`;
    //       winnersGroup.push(
    //         <VictoryMessage
    //           key = {uniqueStamp}
    //           id = {uniqueStamp}
    //           message = { `Player ${i+1} wins!` }
    //           />
    //       )
    //     }
    //   }
    // }
    let finishedGame;
    // console.log(this.props, 'this.props in victory.js');
    // console.log(finishedGame, 'was finishedGame, should be undefined');
    // console.log(winnersGroup, 'winnersGroup just before this.gameFinished check in victory.js', this.gameFinished, 'this.');
    if(this.props.gameFinished){
      finishedGame = winnersGroup

    } else{
      finishedGame = <div></div>

    }

    return(
      <div id = "victoryStatusContainer">
        <p></p>
        {finishedGame}
      </div>

    )
  }
}

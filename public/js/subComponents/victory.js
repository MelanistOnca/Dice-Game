//think this is unnecessary now, part of win conidition by default. restructured layout to implement as such.

//re-evaluate the above when less brain fried. above may be the gibbering of an exhausted mind. IA! IA!

import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

//components
import VictoryMessage from './victoryMessage';

export default class Victory extends React.Component{


  render(){

    //logic to determine winner(s)
    //loop through playerWins checking if playerWins===winCondition. render "player x wins" when player x has the requisite # of wins.
    //handle ties. create new var, let winners = 0; , if (winners > 1), tie declared, "We have a tie! players X,Y,... win!"

    let winners = 0;
    let winnersGroup = [];
    let winnersGroupFinal = [];
    // let tie = "a  tie happened, but the players weren't determined";



    for(let i = 0; i < this.props.selectedPlayerValue ; i++){
      if(this.props.playerWins[i] === this.props.winCondition){
        winners++;
      }
    } //might be able to refactor this loop and the below's loop into one pass/loop? consider for future update.

    //following two winners checks are independent. One provides a tie message only when there is more than one winner, the other provides a player-specific message for one OR more winners.

    //<span> {CONTENT} <br /> <span> used in below pushes for formatting to provide line breaks while maintaining not-entire-line background-color.

    //checks for tie to provide tie win message
    if(winners > 1){
      winnersGroup.push(
        <span
          key= {"tieSpanForFormatting"}
          >
        <VictoryMessage

          id = {"tieMessage"}
          message = {"There has been a tie!"}
          />
        <br />
        </span>
      )
    }

    //checks for all winners to provide a "THAT PLAYER wins" message
    if (winners >= 1){
      for(let i = 0; i < this.props.selectedPlayerValue ; i++){
        if(this.props.playerWins[i] === this.props.winCondition){
          let stamp = new Date().getTime();
          let uniqueStamp= `${i}${stamp}`;
          let spanKey = `${i}Span`;
          winnersGroup.push(
            <span
              key = {spanKey}>
            <VictoryMessage
              key = {uniqueStamp}
              id = {uniqueStamp}
              message = { `Player ${i+1} wins!` }
              newLine = { "\n"}
              />
            <br />
            </span>
          )
        }
      }
    }

    let finishedGame;

    if(this.props.gameFinished){
      finishedGame = winnersGroup
    } else{
      finishedGame = <div></div>
    }

    return(
      <div id = "victoryStatusContainer">

        {finishedGame}
      </div>

    )
  }
}

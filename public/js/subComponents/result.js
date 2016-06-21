import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';


export default class Result extends React.Component{

  componentWillReceiveProps(){
    $('#diceResultContainer').toggle(1)
    $('#diceResultContainer').toggle(1)
    //this is a LITTLE janky, but it gets the point across, i think. probably a better way to do this.
  }
  //still want a better way to do this, probably should toggle between the below and a filler line where (text)color === background-color to maintain spacing

  render(){

    let buffer = this.props.diceResult
    if( buffer < 1 ){
      buffer = 'nothing, yet.'
    } else {
      buffer = `a ${this.props.diceResult}.`
    }

    return(
      <div
        id = "diceResultContainer"
        >
        The dice rolled {buffer}
        
        <p></p>
      </div>
    )
  }
}

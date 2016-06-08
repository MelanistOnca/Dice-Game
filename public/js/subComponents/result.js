import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';


export default class Result extends React.Component{

  componentWillReceiveProps(){
    $('#diceResultContainer').toggle(10)
    $('#diceResultContainer').toggle(10)
    //this is a LITTLE janky, but it gets the point across, i think. probably a better way to do this.
  }

  render(){

    let buffer = this.props.diceResult
    if( buffer < 1 ){
      buffer = 'nothing, yet.'
    } else {
      buffer = `a ${this.props.diceResult}.`
    }
    // let flash = [
    //   {
    //     backgroundColor: blue
    //   },
    //   {
    //     backgroundColor: red
    //   }
    //
    // ]
    // let style;
    return(
      <div
        id = "diceResultContainer"
        >
        The dice rolled {buffer}
      </div>
    )
  }
}

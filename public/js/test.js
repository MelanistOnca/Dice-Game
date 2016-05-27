import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';


export default class Test extends React.Component{


  render(){
    // console.log(this.props, 'was this.props');
    let test;

    if(this.props.gameStarted){
      test = <div>Game Started</div>
    } else {
      test = <div>Game not started</div>
    }

    return(
      <div id="testContainer" >
        {test}
      </div>
    )
  }
}

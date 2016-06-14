import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';


export default class VictoryMessage extends React.Component{


  render(){


    return(
      <div
        id = {`${this.props.id}VictoryMessageContainer`}
        className = "victoryMessage"
        >
          {this.props.message}
      </div>
    )
  }
}

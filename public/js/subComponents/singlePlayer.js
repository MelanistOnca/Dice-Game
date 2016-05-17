

import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class SinglePlayer extends React.Component {



  render() {

    return(
      <div id={`${this.props.id}Container`} className="singlePlayer">
        hello, player number {this.props.playerNumber}
      </div>
    )
  }
}

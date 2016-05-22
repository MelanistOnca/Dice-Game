import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

export default class RoundTally extends React.Component {


  render(){


    return(
      <div
        id = "tallyContainer"
        >
        Tally goes here. will need to dynamically generate display based on number of players.
      </div>
    )
  }
}

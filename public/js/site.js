// basics
import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

// components
import Test from './test';
import AllPlayers from './subComponents/allPlayers';
import PlayerSelector from './subComponents/playerSelector';

export default class Site extends React.Component {



  render() {




    return(
      <div id="siteContainer">
        the site component loaded
        <Test/>

        <PlayerSelector

          />
        <AllPlayers
          />

      </div>
    )
  }
}

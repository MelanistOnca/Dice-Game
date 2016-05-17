import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';


export default class Test extends React.Component{


  render(){
    // console.log(this.props, 'was this.props');

    return(
      <div id="testContainer" >
        hello
        <el>element</el><el>element2</el>
      </div>
    )
  }
}

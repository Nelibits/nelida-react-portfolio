import React, { Component } from 'react';

import PortfolioContainer from "../portfolio/portfolio-container";

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Homepage</h2>  
        <PortfolioContainer />  
      </div>
    );
  }
}
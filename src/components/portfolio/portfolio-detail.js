import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
        <div>
          <h2>Portfolio Detail for {this.props.match.params.slug}</h2>
        </div>
    );
  }
}
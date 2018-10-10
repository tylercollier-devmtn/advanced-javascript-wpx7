import React, { Component } from 'react';
import { calculateMax } from './math';

export default class ErrorDemo extends Component {
  state = {
    max: null,
    message: null
  }

  doThing = () => {
    this.setState({ message: null });
    const arr = [];
    try {
      const max = calculateMax(arr);
      this.setState({ max });
    } catch (error) {
      this.setState({ message: "You didn't supply any values!" });
    }
  }
  
  render() {
    const { max, message } = this.state;
    
    return (
      <div>
        <h1>Error Demo</h1>
        <h2>Max: {max}</h2>
        <div><button onClick={this.doThing}>Do thing</button></div>
        <div>{message}</div>
      </div>  
    );
  }
}
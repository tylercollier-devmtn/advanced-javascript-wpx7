import React, { Component } from 'react';
import './App.css';
import ErrorDemo from './ErrorDemo';
import AsyncDemo from './AsyncDemo';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AsyncDemo />
      </div>
    );
  }
}

export default App;

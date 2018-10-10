import React, { Component } from 'react';
import './App.css';
import ErrorDemo from './ErrorDemo';
import AsyncDemo from './AsyncDemo';
import CompoundComponentsDemo from './CompoundComponentsDemo';

class App extends Component {
  render() {
    return (
      <div className="app">
        <CompoundComponentsDemo />
      </div>
    );
  }
}

export default App;

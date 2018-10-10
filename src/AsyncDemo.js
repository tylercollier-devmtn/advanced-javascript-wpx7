import React, { Component } from 'react';
import axios from 'axios';

const fakeAxios = {
  get: function(value) {
    return new Promise((resolve, reject) => {
      // setTimeout(() => resolve({
      //   data: value
      // }), 2000);
      setTimeout(() => reject('Internets are down'), 2000);
    });
  }
};

export default class AsyncDemo extends Component {
  state = {
    message: null
  };

  // componentDidMount() {
  //   fakeAxios.get(7)
  //     .then(response => {
  //       this.setState({ message: `The data was ${response.data}` });
  //       return fakeAxios.get(8);
  //     })
  //     .then(response => {
  //       this.setState({ message: this.state.message + ` and the data was ${response.data}` });
  //     })
  //     .catch(error => {
  //       this.setState({ message: error });
  //     });
  // }

  async componentDidMount() {
    try {
      let response = await fakeAxios.get(9);
      this.setState({ message: `The data was ${response.data}` });
      response = await fakeAxios.get(10);
      this.setState({ message: this.state.message + ` and the data was ${response.data}` });
    } catch (error) {
      this.setState({ message: error });
    }
    
  }
  
  render() {
    return (
      <>
        <h1>AsyncDemo</h1>
        <div>Message: {this.state.message}</div>
      </>
    );
  }
}
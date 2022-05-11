import React, { Component } from 'react';
import '../styles/App.css';
import Rate from './Rate';
import Thank from './Thank';

class App extends Component {
  constructor(){
    super();
    this.state = {
      rateStatus : false,
      rateContent : ""
    }
  }

  render() {
    return (
      <div>
        {this.state.rateStatus ? <Thank /> : <Rate /> }
      </div>
    );
  }
}

export default App;
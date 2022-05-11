import React, { Component } from 'react';
import '../styles/App.css';

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
      {this.state.rateStatus} ? <Thank /> : <Rate />;
    );
  }
}

export default App;
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

    this.onReturnButton.bind(this);
  }

  onReturnButton () {
    this.setState({
      rateStatus : true
    })
  }

  render() {
    return (
      <div>
        {this.state.rateStatus ? <Thank onReturnButton={this.onReturnButton}/> : <Rate />}
      </div>
    );
  }
}

export default App;
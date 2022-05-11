import React, { Component } from 'react';
import Rate from './Rate';
import Thank from './Thank';

class App extends Component {
  constructor(){
    super();
    this.state = {
      rateStatus : true,
      rateContent : ""
    }

    this.onReturnButton.bind(this);
  }

  onReturnButton = () => {
    this.setState({
      rateStatus : false
    })
  }

  onRateButton = (number) => {
    this.setState({
      rateContent : number
    })
  }

  onSubmitButton () {
    this.setState({
      rateStatus : true
    })
  }

  render() {
    return (
      <div>
        {
          this.state.rateStatus
          ?
          <Thank onReturnButton={this.onReturnButton}/> 
          :
          <Rate onRateButton={this.onRateButton} onSubmitButton={this.onSubmitButton}/>
        }
      </div>
    );
  }
}

export default App;
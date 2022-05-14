import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r : 0,
      g : 0,
      b : 0
    }
  }



  render() {
    return (
      <div className='container'>
        <div className='box'></div>
        <div className='content'>
          <input type="range" min={0} max={255}></input>
        </div>
      </div>
    );
  }
}

export default App;
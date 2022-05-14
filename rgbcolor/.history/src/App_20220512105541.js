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
        <div className='box' style={{"backgroundColor" : `rgb(${this.state.r}, ${this.state.g}, ${this.state.b})`}}></div>
        <div className='content'>
          Red<input type="range" min={0} max={255} onChange={(e)=>{this.setState({r:e.target.value})}}></input>
          Red<input type="range" min={0} max={255} onChange={(e)=>{this.setState({r:e.target.value})}}></input>
          Red<input type="range" min={0} max={255} onChange={(e)=>{this.setState({r:e.target.value})}}></input>
        </div>
      </div>
    );
  }
}

export default App;
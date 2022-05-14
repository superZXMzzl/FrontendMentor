import React, { Component } from 'react';

class Controlled extends Component {
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
          <div className='controll-container'>
            <div className='controll-box' style={{"backgroundColor" : `rgb(${this.state.r}, ${this.state.g}, ${this.state.b})`}}></div>
            <div className='controll-content'>
              <h3>Red<input type="range" min={0} max={255} onChange={(e)=>{this.setState({r:e.target.value})}}></input></h3>
              <h3>Green<input type="range" min={0} max={255} onChange={(e)=>{this.setState({g:e.target.value})}}></input></h3>
              <h3>Blue<input type="range" min={0} max={255} onChange={(e)=>{this.setState({b:e.target.value})}}></input></h3>
            </div>
          </div>
        );
      }
}

export default Controlled;
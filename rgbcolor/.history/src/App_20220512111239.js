import React, { Component } from 'react';
import Controlled from './Controlled';
import Uncontrolled from './Uncontrolled';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      control : true
    }
    this.goToUncontrolled = this.goToUncontrolled.bind(this);

  }

  goToUncontrolled = () => {
    this.setState({
      control : false
    })
  }

  goToControlled = () => {
    this.setState({
      control : true
    })
  }

  render() {
    return (
      <div className='container'>
        {
          this.state.control
          ?
          <Controlled />
          :
          <Uncontrolled />
        }
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';

class Uncontrolled extends Component {
    render() {
        return (
            <div>
                ewdewdew
                <button className='button' onClick={this.props.onButton}>Go to controlled</button>
            </div>
        );
    }
}

export default Uncontrolled;
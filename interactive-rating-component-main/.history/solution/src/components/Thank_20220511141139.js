import React, { Component } from 'react';
import image from '../images/illustration-thank-you.svg';

class Thank extends Component {
    render() {
        return (
            <div className='container'>
                <img src={image}/>
                <p>You selected out of 5</p>
            </div>
        );
    }
}

export default Thank;
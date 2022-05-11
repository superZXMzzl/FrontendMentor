import React, { Component } from 'react';
import image from '../images/illustration-thank-you.svg';

class Thank extends Component {
    render() {
        return (
            <div className='container'>
                <div className="wrapper">
                    <img src={image}/>
                    <h5>You selected out of 5</h5>
                    <h3>Thank you!</h3>
                    <p>We appreciate you taking the time to give a rating. If you ever need more support, 
    don’t hesitate to get in touch!</p>
                </div>
            </div>
        );
    }
}

export default Thank;
import React, { Component } from 'react';
import {Button} from '@mui/material';
import image from '../images/icon-star.svg';

class Rate extends Component {
    render() {
        return (
            <div className='container'>
                <div className="wrapper">
                    <div className="top">
                        <img src={image}/>
                    </div>
                    <div className="mid">
                        <h3>How did we do?</h3>
                        <p>Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!</p>
                    </div>
                    <div className="bottom">
                        <ul>
                            <li><Button>1</Button></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <Button onClick={this.props.onSubmitButton}>Rate</Button>
                </div>
            </div>
        );
    }
}

export default Rate;
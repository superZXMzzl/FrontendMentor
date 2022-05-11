import React, { Component } from 'react';
import {Button} from '@mui/material';
import image from '../images/icon-star-svg';

class Rate extends Component {
    render() {
        return (
            <div className='container'>
                <div className="wrapper">
                    <div className="top">
                        <img src={image}/>
                    </div>
                    <Button onClick={this.props.onSubmitButton}>Rate</Button>
                </div>
            </div>
        );
    }
}

export default Rate;
import React, { Component } from 'react';
import {Button} from '@mui/material';

class Rate extends Component {
    render() {
        return (
            <div className='container'>
                <div className="wrapper">

                    <Button onClick={this.props.onSubmitButton}>Rate</Button>
                </div>
            </div>
        );
    }
}

export default Rate;
import React, { Component } from 'react';
import {Button} from '@mui/material';

class Rate extends Component {
    render() {
        return (
            <div>
                <Button onClick={this.props.onSubmitButton}>Rate</Button>
            </div>
        );
    }
}

export default Rate;
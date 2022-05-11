import React, { Component } from 'react';
import {Button} from '@mui/material';
import image from '../images/icon-star.svg';

class Rate extends Component {
    render() {
        const RateButton = ({number}) => {
            return (
                <button className='rateButton'>
                    {number}
                </button>
            )
        }

        return (
            <div className='container'>
                <div className="rate-wrapper">
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
                            <li><RateButton number={1}></RateButton></li>
                            <li><RateButton number={2}></RateButton></li>
                            <li><RateButton number={3}></RateButton></li>
                            <li><RateButton number={4}></RateButton></li>
                            <li><RateButton number={5}></RateButton></li>
                        </ul>
                    </div>
                    <Button className="submitButton" onClick={this.props.onSubmitButton}>Submit</Button>
                </div>
            </div>
        );
    }
}

export default Rate;
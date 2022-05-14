import React, { Component } from 'react';

class Uncontrolled extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("2. getDerivedStateFromProps ");
        console.log("2. nextProps ", nextProps);
        console.log("2. prevState ", prevState);
    }

    render() {
        return (
            <div className='uncontroll-container'>
                <p>
                    <input type="text" ref="myRef" defaultValue="ZZL"/>
                </p>
                <button className='button' onClick={() => {
                    console.log(this.refs.myRef);
                    console.log(this.refs.myRef.value);  
                }}>Click</button>
                <p ref={this.refs.myRef} onClick={() => {
                                        console.log(this.refs.myRef);
                                        console.log(this.refs.myRef.value);  
                }}>This is ref</p>

                <button className='button' onClick={this.props.onButton}>Go to controlled</button>
            </div>
        );
    }
}

export default Uncontrolled;
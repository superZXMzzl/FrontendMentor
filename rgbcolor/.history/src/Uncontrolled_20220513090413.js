import React, { Component } from 'react';

class Uncontrolled extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    render() {
        return (
            <div className='uncontroll-container'>
                <p>
                    <input type="text" ref="myRef"/>
                </p>
                <button className='button' onClick={() => {
                    console.log(this.refs.myRef);
                    console.log(this.refs.myRef.value);  
                }}>Click</button>
                <p ref={this.myRef} onClick={() => {
                                        console.log(this.refs.myRef);
                                        console.log(this.refs.myRef.value);  
                }}>This is ref</p>
                <h2 ref={h2 => console.log('h2 -> ', h2)}>This is h2</h2>
                <button className='button' onClick={this.props.onButton}>Go to controlled</button>
            </div>
        );
    }
}

export default Uncontrolled;
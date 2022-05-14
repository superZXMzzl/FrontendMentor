import React, { Component } from 'react';

class Uncontrolled extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    render() {
        return (
            <div>
                <p>
                    <input type="text" ref="myinput"/>
                </p>
                <button className='button' onClick={() => {
                    console.log(this.refs.myinput);
                    console.log(this.refs.myinput.value);  
                }}>Click</button>
                <p ref={this.myRef} onClick={() => {
                    console.log(this.myRef);
                    console.log(this.myRef.current);
                }}>This is ref</p>
                <h2 ref={h2 => console.log('h2 -> ', h2)}>This is h2</h2>
                <button className='button' onClick={this.props.onButton}>Go to controlled</button>
            </div>
        );
    }
}

export default Uncontrolled;
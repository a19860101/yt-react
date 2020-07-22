import React, { Component } from 'react';

class Counter extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         title: 'Hello React',
    //         number: 0
    //     }
    // }
    state = {
        title: 'Hello React',
        number: 0
    }
    showText = () => {
        // console.log(this);
        this.setState({
            title: 'HELLO HELLO HELLO'
        })
    }
    increment = () => {
        this.setState({
            number: this.state.number + 1
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.showText}>show</button>
                <h1>{this.state.number}</h1>
                <button onClick={this.increment}>+1</button>
            </div>
        );
    }
}

export default Counter;
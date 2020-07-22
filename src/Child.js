import React, { Component } from 'react';

class Child extends Component {
    state = {
        count: 0
    }
    plus = ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <h2>Child:{this.state.count}</h2>
                <button onClick={this.plus}>Child + 1</button>

            </div>
        );
    }
}

export default Child;
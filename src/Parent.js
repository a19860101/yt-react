import React, { Component } from 'react';
import Child from './Child';
class Parent extends Component {
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
                <h2>Parent:{this.state.count}</h2>
                <button onClick={this.plus}>Parent + 1</button>


                <Child />
            </div>
        );
    }
}

export default Parent;
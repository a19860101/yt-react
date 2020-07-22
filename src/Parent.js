import React, { Component } from 'react';
import Child from './Child';
class Parent extends Component {
    constructor(props) {
        super(props);
        this.childRef = React.createRef();
    }
    
    state = {
        count: 0
    }
    plus = ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    plusChild = () => {
        console.log(this.childRef.current);
        this.childRef.current.plus();
    }
    render() {
        return (
            <div>
                <h2>Parent:{this.state.count}</h2>
                <button onClick={this.plus}>Parent + 1</button>
                <button onClick={this.plusChild}>Child + 1</button>

                <Child ref={this.childRef} plusParent={this.plus}/>
            </div>
        );
    }
}

export default Parent;
import React, { Component } from 'react';
import Child2 from './Child2';
class Parent2 extends Component {
    constructor(props) {
        super(props);
        this.childRef = React.createRef();
    }
    
    state = {
        count: 0,
        childCount: 0,
    }
    plus = ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    plusChild = () => {
        this.setState({
            childCount:this.state.childCount + 1
        })
    }
    render() {
        return (
            <div>
                <h2>Parent:{this.state.count}</h2>
                <button onClick={this.plus}>Parent + 1</button>
                <button onClick={this.plusChild}>Child + 1</button>

                <Child2 
                    ref={this.childRef} 
                    childCount={this.state.childCount}
                    plusParent={this.plus}
                    plusChild={this.plusChild}
                />
            </div>
        );
    }
}

export default Parent2;
import React, { Component } from 'react';

class Child2 extends Component {
    render() {
        return (
            <div>
                <h2>Child:{this.props.childCount}</h2>
                <button onClick={this.props.plusParent}>Parent + 1</button>
                <button onClick={this.props.plusChild}>Child + 1</button>
            </div>
        );
    }
}

export default Child2;
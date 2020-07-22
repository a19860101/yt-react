import React, { Component,createRef } from 'react';

class Ref extends Component {
    constructor(props) {
        super(props);
        this.titleRef = createRef();
        this.titleRef = React.createRef();
    }
    componentDidMount() {
        console.log(this.titleRef.current);
    }
    changeColor = () => {
        this.titleRef.current.style.color = 'red';
    }
    
    render() {
        return (
            <div>
                <h1 ref={this.titleRef}>hello react ref!!</h1>
                <button onClick={this.changeColor}>change</button>
            </div>
        );
    }
}

export default Ref;
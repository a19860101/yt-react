import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Geo from './Geo';
// import Counter from './Counter';
// import Ref from './Ref';
import Parent from './Parent';
class App extends Component {
    render() {
        return (
            <div>
                {/* <Counter /> */}
                {/* <Geo></Geo> */}
                {/* <Ref /> */}
                <Parent></Parent>
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));
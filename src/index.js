import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Geo from './Geo';
// import Counter from './Counter';
// import Ref from './Ref';
// import Parent2 from './Parent2';
import List from './List';
class App extends Component {
    render() {
        return (
            <div>
                {/* <Counter /> */}
                {/* <Geo></Geo> */}
                {/* <Ref /> */}
                {/* <Parent2></Parent2> */}
                <List></List>
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));
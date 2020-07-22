import React, { Component } from 'react';
class List extends Component {
    state = {
        users: ['John','Ben','Mary','Michelle','Jack'],
        foods:[
            {
                id:1,
                name:'滷肉飯'
            },{
                id:2,
                name:'雞排'
            },{
                id:3,
                name:'車輪餅'
            }
        ]
    }
    render() {
        return (
            <div>
                {
                this.state.users.map((user,idx) => <div key={idx}>{user}--{idx}</div>)
                }
                {

                    // this.state.users.map(function(user,idx){
                    //     return <div>{user} -- {idx}</div>
                    // })
                    this.state.foods.map(food => <div key={food.id}>{food.name}</div>)
                }
            </div>
        );
    }
}

export default List;
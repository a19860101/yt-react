import React, { Component } from 'react';
import axios from 'axios';

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
        ],
        lists:[]
    }
    componentDidMount() {
        axios.get('https://picsum.photos/v2/list')
        .then(
            data => 
            // console.log(data.data)
            {
                this.setState({
                    lists: data.data
                })
            }
        )
        .catch(
            err => console.log(err)
        )
    }
    
    render() {
        return (
            <div>
                {
                // this.state.users.map((user,idx) => <div key={idx}>{user}--{idx}</div>)
                }
                {

                    // this.state.users.map(function(user,idx){
                    //     return <div>{user} -- {idx}</div>
                    // })
                    // this.state.foods.map(food => <div key={food.id}>{food.name}</div>)
                }
                {
                    this.state.lists.map(item=>
                        <div key={item.id}>
                            <img src={item.download_url} width="200"></img>
                            <h2>{item.author}</h2>
                        </div>)
                }
            </div>
        );
    }
}

export default List;
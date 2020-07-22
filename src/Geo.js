import React, { Component } from 'react';
import Season from './Season';
class Geo extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {
        lat: null,
        lon: null,
        errMsg: ''
    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                })
            },
            err => {
                console.log(err);
                this.setState({
                    errMsg: err.message
                })
            }
        );
    }
    render() {
        if(this.state.errMsg){
            return (
                <h2>Error Message:{this.state.errMsg}</h2>
                )
        }
        if(!this.state.errMsg && this.state.lat){
            return (
                <div>
                    {/* <h2>Lat: {this.state.lat}</h2> */}
                    {/* <h2>Lon: {this.state.lon}</h2> */}
                    <Season lat={this.state.lat} lon={this.state.lon}></Season>
                </div>
            )
        }
        return (
            <h2>Loading...</h2>
        )
        // return (
        //     <div>
        //         <h2>Lat: {this.state.lat}</h2>
        //         <h2>Lon: {this.state.lon}</h2>
        //         <h2>Error Message:{this.state.errMsg}</h2>
        //         <h2>Loading...</h2>
        //     </div>
        // );
    }
}

export default Geo;
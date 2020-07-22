import React, { Component } from 'react';
import './Season.css';
class Season extends Component {
    seasonConfig = {
        summer: {
            text: 'hot',
            icon: 'https://picsum.photos/id/40/200'
        },
        winter: {
            text: 'Cold',
            icon: 'https://picsum.photos/id/80/200'
        }
    }
    getSeason = (lat,month) => {
        if(month > 3 && month < 10){
            return lat > 0 ? 'summer':'winter';
        }else{
            return lat > 0 ? 'winter':'summer';
        }
    }
    render() {
        console.log(this.props);
        const {lat,lon} = this.props;
        const season = this.getSeason(lat,new Date().getMonth()+1);
        const {text,icon} = this.seasonConfig[season];
        return (
            <div>
                <h2>lat:{lat}</h2>
                <h2>lon:{lon}</h2>
                <div>{season}</div>
                <div>{text}</div>
                <div><img src={icon} /></div>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-alarm-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M5.5.5A.5.5 0 0 1 6 0h4a.5.5 0 0 1 0 1H9v1.07a7.002 7.002 0 0 1 3.537 12.26l.817.816a.5.5 0 0 1-.708.708l-.924-.925A6.967 6.967 0 0 1 8 16a6.967 6.967 0 0 1-3.722-1.07l-.924.924a.5.5 0 0 1-.708-.708l.817-.816A7.002 7.002 0 0 1 7 2.07V1H5.999a.5.5 0 0 1-.5-.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1zm-5 4a.5.5 0 0 0-1 0v3.882l-1.447 2.894a.5.5 0 1 0 .894.448l1.5-3A.5.5 0 0 0 8.5 9V5z"/>
                </svg>
            </div>
        );
    }
}



export default Season;
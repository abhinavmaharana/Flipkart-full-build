import React from 'react';
import './Banner.css';
import Countdown from 'react-countdown';

function Banner() {
    return (
        <div className="banner">
            <div className="left">
                <div className="content">
                    <h1>Deals of the day</h1>
                    {/* <Countdown date={Date.now() + 10000} /> */}
                    <button>View All</button>
                </div>
            </div>
            <div className="right">
                <img width="200px" src="https://rukminim1.flixcart.com/flap/464/708/image/a33323ee3a5b0bc5.jpg" />
            </div>
        </div>
    )
}

export default Banner

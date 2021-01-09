import React from 'react';
import './Banner.css';
// import Countdown from 'react-countdown';

function Banner() {
    return (
        <div className="banner">
            <div className="left">
                <div className="content">
                    <h1>Deals of the day</h1>
                    {/* <Countdown date={Date.now() + 10000} /> */}
                    <button>View All</button>
                </div>
                <div className="cardcontainer">
                    <div className="card-wrapper">
                        <div className="card">
                            <img width="120%" src="https://rukminim1.flixcart.com/image/150/150/k0igia80/smart-lighting/f/t/r/sb0110-b22-led-smitch-original-imafka9umvxwrecq.jpeg" alt="" />
                            <h4>Smitch Wi-Fi White Ambi...</h4>
                            <span>Just ₹199|Flat75% off</span>
                            <p>#bulb</p>
                        </div>
                        <div className="card">
                            <img src="https://rukminim1.flixcart.com/image/150/150/jmxrwy80/cookware-set/z/f/n/8904214709211-pisa-set-wonderchef-original-imaf9bwf9jefrhtv.jpeg" alt="" />
                            <h4>Cookware Set &amp; more</h4>
                            <span>Up to 70% off</span>
                            <p>Prestige, Pigeon &amp; more</p>
                        </div>
                        <div className="card">
                            <img src="https://rukminim1.flixcart.com/image/150/150/screwdriver-set/k/q/u/6032-jackly-original-imaee5u4zgbwyjws.jpeg" alt="" />
                            <h4>Hand Tools</h4>
                            <span>From ₹69</span>
                            <p>Best Selling</p>
                        </div>
                        <div className="card">
                            <img src="https://rukminim1.flixcart.com/image/150/150/k5ihzm80/headphone/u/t/m/mivi-tedpm20-bk-original-imafz69xxetryjx8.jpeg" alt="" />
                            <h4>Headphones</h4>
                            <span>Upto 50% off</span>
                            <p>JBL,Sony & more</p>
                        </div>
                        <div className="card">
                            <img src="https://rukminim1.flixcart.com/image/150/150/kbi9h8w0/mobile/g/g/c/samsung-galaxy-a21s-sm-a217fzkfins-original-imafsuyajewgnfcg.jpeg" alt="" />
                            <h4>Samsung Galaxy A21s (B...</h4>
                            <span>Upto 75%+Extra 15%Off</span>
                            <p>#Great Deals</p>
                        </div>
                        <div className="card">
                            <img src="https://rukminim1.flixcart.com/image/150/150/k5h2jrk0/speaker/mobile-tablet-speaker/f/k/b/mivi-bs3zr-bk-original-imafz59evywgxmhr.jpeg" alt="" />
                            <h4>Speakers</h4>
                            <span>Upto 50% off</span>
                            <p>BoAt, Infinity & more</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <img width="200px" src="https://rukminim1.flixcart.com/flap/464/708/image/a33323ee3a5b0bc5.jpg" alt="" />
            </div>
        </div>
    )
}

export default Banner

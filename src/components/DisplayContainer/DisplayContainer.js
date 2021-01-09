import React from 'react';
import './DisplayContainer.css';

function DisplayContainer() {
    return (
        <div className="displaycontainer">
            <div className="displaycontainer-wrapper" >
                <div className="displaycontainer-content">
                    <div className="content-1">
                      <h1>Best of Electronics</h1>
                      <span>Devices and Accessories</span>
                    </div>
                    <button>View All</button>
                </div>
                <div className="display-cardcontainer">
                    <div className="display-card-wrapper">
                        <div className="display-card">
                            <img src="https://rukminim1.flixcart.com/image/150/150/k933ma80/cases-covers/back-cover/e/m/g/spigen-acs01241-original-imafqy5qvfhh7k6b.jpeg" alt="" />
                            <h4>Best Brands</h4>
                            <span>Shop Now</span>
                            <p>For All Phone Models</p>
                        </div>
                        <div className="display-card">
                            <img src="https://rukminim1.flixcart.com/image/150/150/kb5eikw0/trimmer/z/d/n/0-5-10-mm-bt3101-15-stainless-steel-cordless-philips-original-imafsjquyq2hapug.jpeg" alt="" />
                            <h4>Trimmers &amp; Hair Clippers</h4>
                            <span>From ₹399</span>
                            <p>By Nova, Philips &amp; more</p>
                        </div>
                        <div className="display-card">
                            <img src="https://rukminim1.flixcart.com/image/150/150/k01b8280pkrrdj/headphone/g/j/8/jbl-t450-bt-original-imaff82dvk9wsbzx.jpeg" alt="" />
                            <h4 >Bluetooth Headphones</h4>
                            <span>From ₹ 899</span>
                            <p>JJBL, boAt &amp; more</p>
                        </div>
                        <div className="display-card">
                            <img width="100%" style={{marginTop:"5%"}} src="https://rukminim1.flixcart.com/image/150/150/kbtp0280/speaker/soundbar/i/v/j/hw-q800t-xl-samsung-original-imaft2x2aghh5gvu.jpeg" alt="" />
                            <h4 style={{marginTop: "8%"}}>Dolby Enabled</h4>
                            <span>Upto 50% off</span>
                            <p>Home Theatres &amp; Soundbars</p>
                        </div>
                        <div className="display-card">
                            <img style={{marginTop:"18%"}} src="https://rukminim1.flixcart.com/image/150/150/camera/h/d/b/canon-ixus-285-point-shoot-original-imaeg2eznff9nqzs.jpeg" alt="" />
                            <h4 style={{marginTop: "15%"}}>Point &amp; Shoot Cameras</h4>
                            <span>Sony, Olympus &amp; more</span>
                            <p>From ₹6,999</p>
                        </div>
                        <div className="display-card">
                            <img src="https://rukminim1.flixcart.com/image/150/150/jv8exzk0/battery-charger/p/s/t/ambrane-aqc-56-wall-charger-original-imafg5zbacpnz9s4.jpeg" alt="" />
                            <h4>Mobile Accessories</h4>
                            <span>boAt ,Syska &amp; more</span>
                            <p>Shop Now!</p>
                        </div>
                        <div className="display-card">
                            <img src="https://rukminim1.flixcart.com/image/150/150/k5ihzm80/headphone/u/t/m/mivi-tedpm20-bk-original-imafz69xxetryjx8.jpeg" alt="" />
                            <h4>Headphones</h4>
                            <span>Upto 50% off</span>
                            <p>JBL,Sony & more</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayContainer

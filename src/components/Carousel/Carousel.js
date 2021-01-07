import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

export default () => (
  <Carousel autoPlay infiniteLoop>
    <div>
      <img
        className="home__image"
        src="https://rukminim1.flixcart.com/flap/3376/560/image/813ce1ebdfb5d14d.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        alt=""
        src="https://rukminim1.flixcart.com/flap/3376/560/image/1509ee42387f6f59.jpg"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://rukminim1.flixcart.com/flap/3376/560/image/b16c5ac856ebb5d9.jpg"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://rukminim1.flixcart.com/flap/3376/560/image/1bc2e30358753651.jpg"
      />
    </div>
  </Carousel>
);
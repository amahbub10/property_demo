import React, { Component, Fragment } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image1 from "../../assets/img1.jpg";
import Image4 from "../../assets/img4.jpg";
import Image5 from "../../assets/img5.jpg";
import "./slider.css";
export default class Slider extends Component {
  render() {
    return (
        <Carousel showStatus={false} showThumbs={false} autoPlay={true} useKeyboardArrows={true}>
          <div>
            <img src={Image1} alt="image1" width="100%" height="400"/>
          </div>
          <div>
            <img src={Image4} alt="image3" width="100%" height="400" />
          </div>
          <div>
            <img src={Image5} alt="image3" width="100%" height="400" />
          </div>
        </Carousel>
    );
  }
}

import React, { Component } from "react";
import Slider from "react-slick";
import Cards from "./Cards";
import Ryvul from "../assets/ryvul.png";

const SimpleSlider = () =>{
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows:false,
      autoplay:true,
      autoplayspeed:1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 730,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]    };
    return (
      <div className="sliderDiv Container">
          <img src={Ryvul}/>
        <Slider style={{width:"100%"}} {...settings}>
          <div>
          <Cards/>
          </div>
          <div>
          <Cards/>
          </div>
          <div>
          <Cards/>
          </div>
          <div>
          <Cards/>
          </div>
          <div>
          <Cards/>
          </div>
          <div>
          <Cards/>
          </div>
        </Slider>
      </div>
    );
  }

  export default SimpleSlider;
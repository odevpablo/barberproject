import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  return (
    <div className="viewcarousel">
    <Slider {...settings} className="slider">
    <div className="slide-item">
      <h3></h3>
      <button className="slide-button">
     
      <div className="elements">
        
      </div>
      </button>
    </div>
    <div className="slide-item">
      <h3></h3>
      <button className="slide-button">
     
      <div className="elements">
        
      </div>
      </button>
    </div>
    <div className="slide-item">
      <h3></h3>
      <button className="slide-button">
      
      <div className="elements">
        
      </div>
      </button>
    </div>
    <div className="slide-item">
      <h3></h3>
      <button className="slide-button">
      <div className="elements">
        
      </div>
      </button>
    </div>
  </Slider>
  </div>
  );
}
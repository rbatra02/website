// ImageSlideshow.js
import React from 'react';
import Slider from 'react-slick';
import genai from '../imgs/genai.webp';
import music from '../imgs/music.jpg';
import psych from '../imgs/psych.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlideshow.css'; // Create this CSS file for custom styles

const ImageSlideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        <div>
          <img src={genai} alt="Generative AI" className="slide-image" />
        </div>
        <div>
          <img src={music} alt="Music" className="slide-image" />
        </div>
        <div>
          <img src={psych} alt="Psychology" className="slide-image" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlideshow;

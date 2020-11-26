import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const SliderImg = ({ tophits }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className='slider-container'>
        <Slider {...settings} className='slider-tag'>
          {tophits.map((hits, index) => (
            <div className='slider' key={index}>
              <Link to='#'>
                <img src={hits.img} alt='' />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderImg;

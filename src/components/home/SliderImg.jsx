import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const SliderImg = ({ artist }) => {
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
          {artist.map((art, index) => (
            <div className='slider' key={index}>
              <Link to={`/artist/${art.id}`}>
                <img src={art.img} alt='' />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderImg;

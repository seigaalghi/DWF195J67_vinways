import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const SliderImg = ({ artist }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '30%',
  };
  return (
    <div>
      <div className='slider-container'>
        <Slider {...settings} className='slider-tag'>
          {artist.map((art, index) => (
            <div className='slider' key={index}>
              <Link to={`/artist/${art.id}`}>
                <img src={`http://localhost:5000/uploads/${art.img}`} alt='' />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderImg;

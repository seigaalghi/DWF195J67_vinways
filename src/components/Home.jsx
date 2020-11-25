import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Navbar from './Navbar';
import MusicPlayer from './MusicPlayer';

// JSON IMPORT
import musicList from '../JSON/musicList.json';

const Home = () => {
  const [player, setPlayer] = useState({});

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const { musics, tophits } = musicList;
  return (
    <Fragment>
      <Navbar />
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
      <div className='content-container'>
        {musics.map((music, index) => (
          <div className='contents' key={index} onClick={() => setPlayer({ ...music })}>
            <img src={music.img} alt={music.title} />
            <div className='content'>
              <div className='song-title'>{music.title}</div>
              <div className='song-year'>{music.year}</div>
              <div className='song-artist'>{music.artist}</div>
            </div>
          </div>
        ))}
      </div>
      <MusicPlayer props={player} />
    </Fragment>
  );
};

export default Home;

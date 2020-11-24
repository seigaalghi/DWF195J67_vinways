import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Navbar from './Navbar';

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Fragment>
      <Navbar />
      <div className='slider-container'>
        <Slider {...settings} className='slider-tag'>
          <div className='slider'>
            <Link to='#'>
              <img src='https://i.ytimg.com/vi/dFLiUiD4pw4/maxresdefault.jpg' alt='' />
            </Link>
          </div>
          <div className='slider'>
            <Link to='#'>
              <img src='https://i.ytimg.com/vi/HWgxbptCcuA/maxresdefault.jpg' alt='' />
            </Link>
          </div>
          <div className='slider'>
            <Link to='#'>
              <img src='https://i.ytimg.com/vi/aPCf7_Kk7L8/maxresdefault.jpg' alt='' />
            </Link>
          </div>
          <div className='slider'>
            <Link to='#'>
              <img src='https://i.ytimg.com/vi/4VodI3JCz0Y/maxresdefault.jpg' alt='' />
            </Link>
          </div>
          <div className='slider'>
            <Link to='#'>
              <img src='https://i.ytimg.com/vi/QaMHYCkt3ps/maxresdefault.jpg' alt='' />
            </Link>
          </div>
        </Slider>
      </div>
      <div className='content-container'>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
        <div className='contents'>
          <img src='https://static.wikia.nocookie.net/bandori/images/9/91/BLACK_SHOUT_Blu-ray.jpg/revision/latest/scale-to-width-down/200?cb=20170326234850' alt='' />
          <div className='content'>
            <div className='song-title'>Black Shout</div>
            <div className='song-year'>2018</div>
            <div className='song-artist'>Roselia</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;

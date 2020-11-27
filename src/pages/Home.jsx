import React, { Fragment, useContext } from 'react';
import Contents from '../components/home/Contents';
import SliderImg from '../components/home/SliderImg';
import { AppContext } from '../context/appContext';

// JSON IMPORT

const Home = () => {
  const [state, dispatch] = useContext(AppContext);

  const { musics, artist } = state;
  return (
    <Fragment>
      <SliderImg artist={artist} />
      <Contents musics={musics} dispatch={dispatch} />
    </Fragment>
  );
};

export default Home;

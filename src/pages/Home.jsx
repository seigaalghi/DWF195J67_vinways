import React, { Fragment, useContext, useState } from 'react';
import Contents from '../components/home/Contents';
import MusicPlayer from '../components/home/MusicPlayer';
import SliderImg from '../components/home/SliderImg';
import { AppContext } from '../context/appContext';

// JSON IMPORT

const Home = () => {
  const [state, dispatch] = useContext(AppContext);
  const [player, setPlayer] = useState({});

  const { musics, tophits } = state;
  return (
    <Fragment>
      <SliderImg tophits={tophits} />
      <Contents musics={musics} setPlayer={setPlayer} />
      <MusicPlayer props={player} />
    </Fragment>
  );
};

export default Home;

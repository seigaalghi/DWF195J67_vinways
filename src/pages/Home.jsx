import React, { Fragment, useContext } from 'react';
import Contents from '../components/home/Contents';
import SliderImg from '../components/home/SliderImg';
import { AppContext } from '../context/appContext';

// JSON IMPORT

const Home = () => {
  const [state, dispatch] = useContext(AppContext);

  const { musics, tophits } = state;
  return (
    <Fragment>
      <SliderImg tophits={tophits} />
      <Contents musics={musics} dispatch={dispatch} />
    </Fragment>
  );
};

export default Home;

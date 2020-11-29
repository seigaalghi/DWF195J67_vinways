import React, { Fragment, useContext, useState } from 'react';
import Contents from '../components/home/Contents';
import SliderImg from '../components/home/SliderImg';
import { AppContext } from '../context/appContext';

// JSON IMPORT

const Home = () => {
  const [state, dispatch] = useContext(AppContext);

  const { musics, artist } = state;

  const [search, setSearch] = useState([]);

  const searchhandler = (e) => {
    const music = state.musics.map((music) => (music.title.toLowerCase().includes(e.target.value.toLowerCase()) ? music : null)).filter((music) => music !== null);
    setSearch(music);
  };

  return (
    <Fragment>
      <SliderImg artist={artist} />
      <div className='form-group'>
        <input type='text' placeholder={`Search..`} onChange={searchhandler} />
        <i className='fa fa-search'></i>
      </div>
      <Contents musics={search.length > 0 ? search : musics} queue={state.musics.map((music) => music.id)} dispatch={dispatch} />
    </Fragment>
  );
};

export default Home;

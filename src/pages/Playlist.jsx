import React, { Fragment, useContext, useState, useEffect } from 'react';
import Contents from '../components/home/Contents';
import { AppContext } from '../context/appContext';

const Playlist = () => {
  const [state, dispatch] = useContext(AppContext);
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    const music = state.musics.filter((music) => state.user.playlist.includes(music.id));
    setMusics(music);
  }, [state.user]);

  console.log(musics);

  return (
    <Fragment>
      <div className='playlist-container'>
        <h1>{state.user.name}'s Playlist</h1>
        <Contents musics={musics} dispatch={dispatch} />
      </div>
    </Fragment>
  );
};

export default Playlist;

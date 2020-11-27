import React, { Fragment, useContext, useState, useEffect } from 'react';
import Contents from '../components/home/Contents';
import { AppContext } from '../context/appContext';
import { useParams } from 'react-router-dom';

const Artist = () => {
  const [state, dispatch] = useContext(AppContext);
  const [musics, setMusics] = useState([]);
  const { artistId } = useParams();

  useEffect(() => {
    const music = state.musics.map((music) => (music.artistId === artistId ? music : null)).filter((music) => music !== null);
    setMusics(music);
  }, [state.user]);

  console.log(musics);

  return (
    <Fragment>
      <div className='playlist-container'>
        <h1>{state.artist.find((art) => art.id == artistId).name}'s Song(s)</h1>
        <Contents musics={musics} dispatch={dispatch} />
      </div>
    </Fragment>
  );
};

export default Artist;

import React, { Fragment, useContext, useState, useEffect } from 'react';
import Contents from '../components/home/Contents';
import { useParams } from 'react-router-dom';
import { loadArtist } from '../redux/action/music';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';

const Artist = ({ music: { artist, loading }, loadArtist }) => {
  const { artistId } = useParams();

  useEffect(() => {
    loadArtist(artistId);
  }, []);

  return !artist || loading ? (
    <ReactLoading type={'spinningBubbles'} color={'grey'} style={{ margin: '50px auto', width: '50px' }} />
  ) : (
    <Fragment>
      <div className='playlist-container'>
        <div className='artist'>
          <img src={`http://localhost:5000/uploads/${artist.img}`} alt={artist.name} className='artist-banner' />
          <div>
            <h3>Description</h3>
            <p>Name : {artist.name}</p>
            <p>Type : {artist.type}</p>
            <p>Start at : {artist.start}</p>
          </div>
        </div>

        <h1>{artist.name}'s Song(s)</h1>
        <Contents musics={artist.musics} queue={artist.musics.map((music) => music.id)} />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  music: state.music,
});

export default connect(mapStateToProps, { loadArtist })(Artist);

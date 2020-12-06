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
          <h1>{artist.name}'s Song(s)</h1>
          <img src={`http://localhost:5000/uploads/${artist.img}`} alt={artist.name} className='artist-banner' />
          <div>
            <table>
              <thead>
                <tr>
                  <th>Description :</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>: {artist.name}</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>: {artist.type}</td>
                </tr>
                <tr>
                  <td>Start at</td>
                  <td>: {artist.start}</td>
                </tr>
                <tr>
                  <td>Songs</td>
                  <td>: {artist.musics.length}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <Contents musics={artist.musics} queue={artist.musics} />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  music: state.music,
});

export default connect(mapStateToProps, { loadArtist })(Artist);

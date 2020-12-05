import React, { Fragment, useContext, useEffect, useState } from 'react';
import Contents from '../components/home/Contents';
import SliderImg from '../components/home/SliderImg';
import ReactLoading from 'react-loading';
import { cleanMusic, loadArtists, loadMusics } from '../redux/action/music';
import { connect } from 'react-redux';

const Home = ({ loadMusics, loadArtists, cleanMusic, music: { loading, artists, musics } }) => {
  useEffect(() => {
    loadMusics();
    loadArtists();
    return () => {
      cleanMusic();
    };
  }, []);

  const [search, setSearch] = useState([]);

  const searchhandler = (e) => {
    const musics = musics
      .map((music) => (music.title.toLowerCase().includes(e.target.value.toLowerCase()) ? music : null))
      .filter((music) => music !== null);
    setSearch(musics);
  };

  return !musics || !artists || loading ? (
    <ReactLoading type={'spinningBubbles'} color={'grey'} style={{ margin: '50px auto', width: '50px' }} />
  ) : (
    <Fragment>
      <SliderImg artist={artists} />
      <div className='form-group'>
        <input type='text' placeholder={`Search..`} onChange={searchhandler} />
        <i className='fa fa-search'></i>
      </div>
      <Contents musics={search.length > 0 ? search : musics} queue={musics} />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  music: state.music,
});

export default connect(mapStateToProps, { loadMusics, loadArtists, cleanMusic })(Home);

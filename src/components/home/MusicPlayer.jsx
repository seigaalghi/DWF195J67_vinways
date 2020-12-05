import React from 'react';
import H5AudioPlayer from 'react-h5-audio-player';
import { connect } from 'react-redux';
import { closePlayer, setPlayer } from '../../redux/action/player';

const MusicPlayer = ({ player: { music, queue, loading }, auth: { user }, setPlayer, closePlayer }) => {
  const nextHandler = () => {
    const index = queue.map((que) => que.id).indexOf(music.id);
    if (index !== queue.length - 1) {
      setPlayer(queue[index + 1]);
    }
  };

  const prevHandler = () => {
    const index = queue.map((que) => que.id).indexOf(music.id);
    if (index !== 0) {
      setPlayer(queue[index - 1]);
    } else {
      setPlayer(queue[index]);
    }
  };

  const likeHandler = (e, id) => {
    e.stopPropagation();
  };
  const dislikeHandler = (e, id) => {
    e.stopPropagation();
  };

  const addPlaylistHandler = (e, id) => {
    e.stopPropagation();
  };
  const removePlaylistHandler = (e, id) => {
    e.stopPropagation();
  };

  return music && !loading ? (
    <div className='music-player-container'>
      <p>{music.title ? music.title : ''}</p>
      {music.img ? <img src={music.img ? `http://localhost:5000/uploads/${music.img}` : ''} alt={music.title} /> : ''}

      <H5AudioPlayer
        src={music.audio ? `http://localhost:5000/uploads/${music.audio}` : ''}
        className='music-player'
        onClickNext={nextHandler}
        onClickPrevious={prevHandler}
        showSkipControls={true}
        onEnded={nextHandler}
      />
      <div className='action'>
        {!music.likes.find((like) => like.id === user.id) ? (
          <i className='far fa-heart' onClick={(e) => likeHandler(e, music.id)}></i>
        ) : (
          <i className='fas fa-heart color-danger' onClick={(e) => dislikeHandler(e, music.id)}></i>
        )}

        {!user.playlists.find((play) => play.id === music.id) ? (
          <i className='fas fa-plus' onClick={(e) => addPlaylistHandler(e, music.id)}></i>
        ) : (
          <i className='fas fa-plus color-primary' onClick={(e) => removePlaylistHandler(e, music.id)}></i>
        )}

        <i
          className='fas fa-times'
          onClick={() => {
            closePlayer();
          }}></i>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  player: state.player,
  auth: state.auth,
});

export default connect(mapStateToProps, { closePlayer, setPlayer })(MusicPlayer);

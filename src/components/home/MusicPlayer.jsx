import React, { useContext, useState, useEffect } from 'react';
import H5AudioPlayer from 'react-h5-audio-player';
import { AppContext } from '../../context/appContext';

const MusicPlayer = () => {
  const [player, setPlayer] = useState({});
  const [state, dispatch] = useContext(AppContext);
  const [queue, setQueue] = useState([]);
  const [playing, setPlaying] = useState('');

  useEffect(() => {
    if (state.player.id) {
      setPlaying(state.player.id);
    }
    if (state.player.queue) {
      setQueue(state.player.queue);
    }
  }, [state.player.id, state.player.queue]);

  useEffect(() => {
    const music = state.musics.find((music) => music.id === playing);
    setPlayer(music);
  }, [playing, state.musics]);

  const nextHandler = () => {
    const index = queue.map((que) => que).indexOf(playing);
    if (index !== queue.length - 1) {
      setPlaying(queue[index + 1]);
    }
  };

  const prevHandler = () => {
    const index = queue.map((que) => que).indexOf(playing);
    if (index !== 0) {
      setPlaying(queue[index - 1]);
    } else {
      setPlaying(queue[index]);
    }
  };

  const likeHandler = (e, id) => {
    e.stopPropagation();
    dispatch({
      type: 'LIKE_MUSIC',
      payload: {
        id: id,
        email: state.user.email,
      },
    });
  };
  const dislikeHandler = (e, id) => {
    e.stopPropagation();
    dispatch({
      type: 'DISLIKE_MUSIC',
      payload: {
        id: id,
        email: state.user.email,
      },
    });
  };

  const addPlaylistHandler = (e, id) => {
    e.stopPropagation();
    dispatch({
      type: 'ADD_PLAYLIST',
      payload: {
        id: id,
        email: state.user.email,
      },
    });
  };
  const removePlaylistHandler = (e, id) => {
    e.stopPropagation();
    dispatch({
      type: 'REMOVE_PLAYLIST',
      payload: {
        id: id,
        email: state.user.email,
      },
    });
  };

  return player && player.likes && state.user ? (
    <div className='music-player-container'>
      <p>{player.title ? player.title : ''}</p>
      {player.img ? <img src={player.img ? player.img : ''} alt='' /> : ''}

      <H5AudioPlayer src={player.audio ? player.audio : ''} className='music-player' onClickNext={nextHandler} onClickPrevious={prevHandler} showSkipControls={true} onEnded={nextHandler} />
      <div className='action'>
        {!player.likes.find((like) => like === state.user.email) ? (
          <i className='far fa-heart' onClick={(e) => likeHandler(e, player.id)}></i>
        ) : (
          <i className='fas fa-heart color-danger' onClick={(e) => dislikeHandler(e, player.id)}></i>
        )}

        {!state.user.playlist.find((play) => play === player.id) ? (
          <i className='fas fa-plus' onClick={(e) => addPlaylistHandler(e, player.id)}></i>
        ) : (
          <i className='fas fa-plus color-primary' onClick={(e) => removePlaylistHandler(e, player.id)}></i>
        )}

        <i
          className='fas fa-times'
          onClick={() => {
            dispatch({
              type: 'CLOSE_PLAYER',
            });
          }}></i>
      </div>
    </div>
  ) : null;
};

export default MusicPlayer;

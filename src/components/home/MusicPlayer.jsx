import React, { useContext, useState, useEffect } from 'react';
import H5AudioPlayer from 'react-h5-audio-player';
import { AppContext } from '../../context/appContext';

const MusicPlayer = () => {
  const [player, setPlayer] = useState({});
  const [state, dispatch] = useContext(AppContext);

  useEffect(() => {
    if (state.player.id) {
      const music = state.musics.find((music) => music.id === state.player.id);
      setPlayer(music);
    }
  }, [state.player.id]);

  const likeHandler = (e, id) => {
    e.stopPropagation();
    console.log(e);
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
    console.log(e);
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

      <H5AudioPlayer src={player.audio ? player.audio : ''} className='music-player' />
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

import React, { useContext } from 'react';
import { AppContext } from '../../context/appContext';

const Contents = ({ musics, queue }) => {
  const [state, dispatch] = useContext(AppContext);
  const handlerMusic = (id) => {
    if (state.user.premium) {
      dispatch({
        type: 'SET_PLAYER',
        payload: { id: id, queue: queue },
      });
    } else {
      dispatch({
        type: 'SET_ALERT',
        payload: {
          text: 'Please make a payment to listen to the hottest songs in the world',
          open: true,
          type: 'warning',
        },
      });
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

  return (
    <div>
      <div className='content-container'>
        {musics.map((music, index) => (
          <div className='contents' key={index} onClick={() => handlerMusic(music.id)}>
            <img src={music.img} alt={music.title} />
            <div className='content'>
              <div className='song-title'>{music.title}</div>
              <div className='song-year'>{music.year}</div>
              <div className='song-artist'>{music.artist}</div>
              <div className='content-action'>
                {!music.likes.find((like) => like === state.user.email) ? (
                  <i className='far fa-heart' onClick={(e) => likeHandler(e, music.id)}></i>
                ) : (
                  <i className='fas fa-heart color-danger' onClick={(e) => dislikeHandler(e, music.id)}></i>
                )}
                {!state.user.playlist.find((play) => play === music.id) ? (
                  <i className='fas fa-plus' onClick={(e) => addPlaylistHandler(e, music.id)}></i>
                ) : (
                  <i className='fas fa-plus color-primary' onClick={(e) => removePlaylistHandler(e, music.id)}></i>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contents;

import React, { useContext } from 'react';
import { AppContext } from '../../context/appContext';

const Contents = () => {
  const [state, dispatch] = useContext(AppContext);
  const handlerMusic = (music) => {
    if (state.user.premium) {
      dispatch({
        type: 'SET_PLAYER',
        payload: music,
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
  return (
    <div>
      <div className='content-container'>
        {state.musics.map((music, index) => (
          <div className='contents' key={index} onClick={() => handlerMusic(music)}>
            <img src={music.img} alt={music.title} />
            <div className='content'>
              <div className='song-title'>{music.title}</div>
              <div className='song-year'>{music.year}</div>
              <div className='song-artist'>{music.artist}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contents;

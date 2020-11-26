import React, { useContext } from 'react';
import H5AudioPlayer from 'react-h5-audio-player';
import { AppContext } from '../../context/appContext';

const MusicPlayer = () => {
  const [state, dispatch] = useContext(AppContext);
  const { title, audio, img } = state.player;
  return (
    <div className='music-player-container'>
      <p>{title ? title : ''}</p>
      {img ? <img src={img ? img : ''} alt='' /> : ''}

      <H5AudioPlayer src={audio ? audio : ''} className='music-player' />
      <i
        className='fas fa-times'
        onClick={() => {
          dispatch({
            type: 'CLOSE_PLAYER',
          });
        }}></i>
    </div>
  );
};

export default MusicPlayer;

import React from 'react';
import H5AudioPlayer from 'react-h5-audio-player';

const MusicPlayer = ({ props: { title, audio, img } }) => {
  return (
    <div className='music-player-container'>
      <p>{title ? title : ''}</p>
      {img ? <img src={img ? img : ''} alt='' /> : ''}

      <H5AudioPlayer src={audio ? audio : ''} className='music-player' />
    </div>
  );
};

export default MusicPlayer;

import React, { useEffect, useState } from 'react';
import H5AudioPlayer from 'react-h5-audio-player';
import { connect } from 'react-redux';
import { closePlayer, setPlayer } from '../../redux/action/player';
import { addLike, removeLike } from '../../redux/action/music';
import { addPlaylist, removePlaylist } from '../../redux/action/auth';

const MusicPlayer = ({
  player: { music, queue, loading },
  musics,
  auth: { user },
  setPlayer,
  closePlayer,
  addLike,
  removeLike,
  addPlaylist,
  removePlaylist,
}) => {
  const [musicPlayer, setMusicPlayer] = useState({});

  useEffect(() => {
    if (music) {
      const player = async () => {
        const res = await musics.find((msc) => msc.id === music.id);
        setMusicPlayer(res);
      };
      console.log('executed');
      player();
    }
  }, [musics, music]);

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
    addLike(id);
  };
  const dislikeHandler = (e, id) => {
    e.stopPropagation();
    removeLike(id, user.id);
  };

  const addPlaylistHandler = (e, id) => {
    e.stopPropagation();
    addPlaylist(id);
  };
  const removePlaylistHandler = (e, id) => {
    e.stopPropagation();
    removePlaylist(id);
  };

  return music && musicPlayer.likes && !loading ? (
    <div className='music-player-container'>
      <p>{musicPlayer.title ? musicPlayer.title : ''}</p>
      {musicPlayer.img ? <img src={musicPlayer.img ? `http://localhost:5000/uploads/${musicPlayer.img}` : ''} alt={musicPlayer.title} /> : ''}

      <H5AudioPlayer
        src={musicPlayer.audio ? `http://localhost:5000/uploads/${musicPlayer.audio}` : ''}
        className='music-player'
        onClickNext={nextHandler}
        onClickPrevious={prevHandler}
        showSkipControls={true}
        onEnded={nextHandler}
      />
      <div className='action'>
        {!musicPlayer.likes.find((like) => like.id === user.id) ? (
          <i className='far fa-heart' onClick={(e) => likeHandler(e, musicPlayer.id)}></i>
        ) : (
          <i className='fas fa-heart color-danger' onClick={(e) => dislikeHandler(e, musicPlayer.id)}></i>
        )}

        {!user.playlists.find((play) => play.id === musicPlayer.id) ? (
          <i className='fas fa-plus' onClick={(e) => addPlaylistHandler(e, musicPlayer.id)}></i>
        ) : (
          <i className='fas fa-plus color-primary' onClick={(e) => removePlaylistHandler(e, musicPlayer.id)}></i>
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
  musics: state.music.musics,
});

export default connect(mapStateToProps, { closePlayer, setPlayer, addLike, removeLike, addPlaylist, removePlaylist })(MusicPlayer);

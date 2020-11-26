import React, { Fragment, useState, useContext } from 'react';
import { AppContext } from '../context/appContext';

const AddMusic = () => {
  const [state, dispatch] = useContext(AppContext);
  const [formData, setForMData] = useState({
    title: '',
    img: '',
    year: '',
    artist: '',
    audio: '',
  });

  const changeHandler = (e) => {
    setForMData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_MUSIC',
      payload: formData,
    });
  };
  return (
    <Fragment>
      <div className='add-music-container'>
        <h1>Add Music</h1>
        <form onSubmit={submitHandler}>
          <input type='text' className='input' name='title' onChange={changeHandler} value={formData.title} required placeholder='Song Title' />

          <label className='input label-input-file'>
            {formData.img ? (
              formData.img
            ) : (
              <span>
                Album Cover <i className='fas fa-paperclip'></i>
              </span>
            )}

            <input type='file' className='input-file' accept='image/*' value={formData.img} onChange={changeHandler} name='img' required />
          </label>

          <input type='text' className='input' name='year' onChange={changeHandler} value={formData.year} required placeholder='Song Released Year' />

          <select className='input' name='artist' onChange={changeHandler} value={formData.artist} required placeholder='Song Artist'>
            <option>Select Artist</option>
            {state.artist.map((art) => (
              <option value={art.id} key={art.id}>
                {art.name}
              </option>
            ))}
          </select>

          <label className='input label-input-file'>
            {formData.audio ? (
              formData.audio
            ) : (
              <span>
                Audio <i className='fas fa-paperclip'></i>
              </span>
            )}

            <input type='file' className='input-file' accept='audio/*' value={formData.audio} onChange={changeHandler} name='audio' required />
          </label>
          <input type='submit' className='btn btn-big' />
        </form>
      </div>
    </Fragment>
  );
};

export default AddMusic;

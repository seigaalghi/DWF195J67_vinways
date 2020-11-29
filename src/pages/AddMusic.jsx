import React, { Fragment, useState, useContext } from 'react';
import { AppContext } from '../context/appContext';

const AddMusic = () => {
  const [state, dispatch] = useContext(AppContext);
  const [image, setImage] = useState('');
  const [formData, setForMData] = useState({
    title: '',
    img: null,
    year: '',
    artist: '',
    audio: '',
  });

  const changeHandler = (e) => {
    setForMData({ ...formData, [e.target.name]: e.target.value });
  };

  const fileHandler = (e) => {
    if (e.target.files) {
      const fileName = String(e.target.files[0].name);
      setForMData({ ...formData, [e.target.name]: fileName });
      if (e.target.name === 'img') {
        setImage(URL.createObjectURL(e.target.files[0]));
      }
    }
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

            <input type='file' className='input-file' accept='image/*' onChange={fileHandler} name='img' required />
          </label>

          <input type='text' className='input' name='year' onChange={changeHandler} value={formData.year} required placeholder='Song Released Year' />

          <select className='input' name='artist' onChange={changeHandler} value={formData.artist} required placeholder='Song Artist'>
            <option>Select Artist</option>
            {state.artist.map((art, index) => (
              <option value={art.id} key={index}>
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

            <input type='file' className='input-file' accept='audio/*' onChange={fileHandler} name='audio' required />
          </label>
          <input type='submit' className='btn btn-big' />
        </form>
        <div className='preview'>
          <h5>Album Art Preview</h5>
          <div
            className='blur-img'
            style={{
              backgroundImage: `url(${image ? image : ''})`,
              height: '200px',
              width: '200px',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%',
              margin: '10px auto',
              border: '1px solid #03f387',
            }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default AddMusic;

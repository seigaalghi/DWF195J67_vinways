import React, { Fragment, useState, useContext } from 'react';
import { AppContext } from '../context/appContext';

const AddArtist = () => {
  const [state, dispatch] = useContext(AppContext);
  const [image, setImage] = useState('');
  const [formData, setForMData] = useState({
    name: '',
    img: '',
    age: '',
    type: '',
    start: '',
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
      type: 'ADD_ARTIST',
      payload: formData,
    });
  };
  return (
    <Fragment>
      <div className='add-music-container'>
        <h1>Add Music</h1>
        <form onSubmit={submitHandler}>
          <input type='text' className='input' name='name' onChange={changeHandler} value={formData.name} required placeholder='Artist Name' />

          <label className='input label-input-file'>
            {formData.img ? (
              formData.img
            ) : (
              <span>
                Artist Picture <i className='fas fa-paperclip'></i>
              </span>
            )}

            <input type='file' className='input-file' accept='image/*' onChange={fileHandler} name='img' required />
          </label>

          <input type='text' className='input' name='age' onChange={changeHandler} value={formData.age} required placeholder='Age' />

          <select className='input' name='type' onChange={changeHandler} value={formData.type} required placeholder='Artist Type'>
            <option>Select Artist</option>
            <option value='Solo'>Solo</option>
            <option value='Duo'>Duo</option>
            <option value='Trio'>Trio</option>
            <option value='Quarted'>Quarted</option>
            <option value='Band'>Band</option>
            <option value='Boyband'>Boyband</option>
            <option value='Girlband'>Girlband</option>
          </select>

          <input type='text' className='input' name='start' onChange={changeHandler} value={formData.start} required placeholder='Start a career' />

          <input type='submit' className='btn btn-big' />
        </form>
      </div>
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
    </Fragment>
  );
};

export default AddArtist;

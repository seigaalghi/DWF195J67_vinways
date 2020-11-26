import React, { Fragment, useState, useContext } from 'react';
import { AppContext } from '../context/appContext';

const AddArtist = () => {
  const [state, dispatch] = useContext(AppContext);
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

            <input type='file' className='input-file' accept='image/*' value={formData.img} onChange={changeHandler} name='img' required />
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
    </Fragment>
  );
};

export default AddArtist;

import React, { useContext } from 'react';
import { AppContext } from '../context/appContext';

const PopUp = () => {
  const [state, dispatch] = useContext(AppContext);
  const { open, text, type } = state.alert;

  const closeHandler = () => {
    dispatch({
      type: 'REMOVE_ALERT',
    });
  };

  return open ? (
    <div className='modal'>
      <div className={`alert alert-${type}`}>
        <i className='far fa-times-circle' onClick={closeHandler}></i>
        <p>{text}</p>
      </div>
      <div className='closer' onClick={closeHandler}></div>
    </div>
  ) : null;
};

export default PopUp;

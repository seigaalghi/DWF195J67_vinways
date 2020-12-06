import axios from 'axios';
import { UPLOAD_PAYMENT } from '../types';
import { setAlert } from './alert';

export const uploadPayment = (data) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    };
    const res = await axios.post('http://localhost:5000/api/v1/transaction/', data, config);
    dispatch({
      type: UPLOAD_PAYMENT,
      payload: res.data.data,
    });
    dispatch(setAlert(res.data.message, 'success'));
  } catch (error) {
    if (error.response) {
      if (error.response.data.message) {
        dispatch(setAlert(error.response.data.message, 'danger'));
      }
    }
  }
};

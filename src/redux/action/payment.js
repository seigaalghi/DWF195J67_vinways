import axios from 'axios';
import { GET_PAYMENTS, UPLOAD_PAYMENT, APPROVE, REJECT } from '../types';
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

export const loadPayments = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/v1/transactions/');
    dispatch({
      type: GET_PAYMENTS,
      payload: res.data.data,
    });
  } catch (error) {
    if (error.response) {
      if (error.response.data.message) {
        dispatch(setAlert(error.response.data.message, 'danger'));
      }
    }
  }
};

export const approvePayment = (userId, transactionId) => async (dispatch) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  const body = JSON.stringify({ userId });
  try {
    const res = await axios.post(`http://localhost:5000/api/v1/admin/${transactionId}`, body, config);

    dispatch({
      type: APPROVE,
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

export const rejectPayment = (userId, transactionId) => async (dispatch) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  const body = JSON.stringify({ userId });
  try {
    const res = await axios.put(`http://localhost:5000/api/v1/admin/${transactionId}`, body, config);

    dispatch({
      type: REJECT,
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

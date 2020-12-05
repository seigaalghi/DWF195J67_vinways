import axios from 'axios';
import { AUTH_ERROR, LOAD_USER, LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT } from '../types';
import { setAlert } from './alert';
import setAuth from '../utility/setAuthToken';

// =====================================================================
// Load User
// =====================================================================

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuth(localStorage.token);
  }
  try {
    const res = await axios.get('http://localhost:5000/api/v1/auth/');
    dispatch({
      type: LOAD_USER,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// =====================================================================
// Register
// =====================================================================

export const userRegister = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  const body = JSON.stringify({ name, email, password });
  try {
    const res = await axios.post('http://localhost:5000/api/v1/auth/register', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data.data,
    });
    dispatch(setAlert('Registered Successfully', 'success'));
    dispatch(loadUser());
  } catch (error) {
    if (error.response.data.message) {
      dispatch(setAlert(error.response.data.message, 'danger'));
    }
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// =====================================================================
// Login
// =====================================================================

export const userLogin = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post('http://localhost:5000/api/v1/auth/login', body, config);
    console.log(res.data.data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data,
    });
    dispatch(setAlert('Logged in Successfully', 'success'));
    dispatch(loadUser());
  } catch (error) {
    if (error.response.data.message) {
      dispatch(setAlert(error.response.data.message, 'danger'));
    }
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// =====================================================================
// Logout
// =====================================================================

export const userLogout = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    if (error.response.data.message) {
      dispatch(setAlert(error.response.data.message, 'danger'));
    }
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

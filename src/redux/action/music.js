import axios from 'axios';
import { LOAD_ARTISTS, LOAD_ARTIST, LOAD_MUSICS, MUSIC_ERROR, MUSIC_CLEAN } from '../types';
import { setAlert } from './alert';

export const loadMusics = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/v1/musics');
    dispatch({
      type: LOAD_MUSICS,
      payload: res.data.data,
    });
  } catch (error) {
    if (error.response) {
      if (error.response.data.message) {
        dispatch(setAlert(error.response.data.message, 'danger'));
      }
    }
    dispatch({
      type: MUSIC_ERROR,
    });
  }
};

export const loadArtists = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/v1/artists');
    dispatch({
      type: LOAD_ARTISTS,
      payload: res.data.data,
    });
  } catch (error) {
    if (error.response) {
      if (error.response.data.message) {
        dispatch(setAlert(error.response.data.message, 'danger'));
      }
    }
    dispatch({
      type: MUSIC_ERROR,
    });
  }
};

export const loadArtist = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/v1/artist/${id}`);
    dispatch({
      type: LOAD_ARTIST,
      payload: res.data.data,
    });
  } catch (error) {
    if (error.response) {
      if (error.response.data.message) {
        dispatch(setAlert(error.response.data.message, 'danger'));
      }
    }
    dispatch({
      type: MUSIC_ERROR,
    });
  }
};

export const cleanMusic = () => (dispatch) => {
  try {
    dispatch({
      type: MUSIC_CLEAN,
    });
  } catch (error) {
    console.log(error);
  }
};

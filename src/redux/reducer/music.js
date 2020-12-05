const { LOAD_MUSICS, MUSIC_ERROR, CLEAN_MUSIC, LOAD_ARTISTS, LOAD_ARTIST } = require('../types');

const initialState = {
  loading: true,
  musics: null,
  artists: null,
  artist: null,
  music: null,
};

const musicReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case LOAD_MUSICS:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case MUSIC_ERROR:
      return {
        ...state,
        loading: true,
        musics: null,
        artists: null,
        music: null,
      };
    case CLEAN_MUSIC:
      return {
        ...state,
        loading: true,
      };
    case LOAD_ARTISTS:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case LOAD_ARTIST:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default musicReducer;

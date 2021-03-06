import { createContext, useReducer } from 'react';
import data from '../JSON/musicList.json';
import uuid from 'react-uuid';

export const AppContext = createContext();

const initialState = {
  ...data,
  isLogin: false,
  user: {},
  player: {
    isOpen: false,
    musicid: '',
    queue: [],
  },
  alert: {
    text: '',
    open: false,
    type: '',
  },
};

const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'LOGIN':
      const user = state.users.filter((user) => user.email === payload.email && user.password === payload.password);
      console.log(payload);
      if (user.length > 0) {
        return {
          ...state,
          isLogin: true,
          user: state.users.find((user) => user.email === payload.email),
        };
      } else {
        return {
          ...state,
          isLogin: false,
          alert: {
            text: 'Wrong Email or Password',
            open: true,
            type: 'danger',
          },
        };
      }
    case 'LOGOUT':
      return {
        ...state,
        ...data,
        isLogin: false,
        user: {},
        player: {
          isOpen: false,
          musicid: '',
          queue: [],
        },
        alert: {
          text: '',
          open: false,
          type: '',
        },
      };
    case 'SET_ALERT':
      return {
        ...state,
        alert: {
          ...payload,
        },
      };
    case 'REMOVE_ALERT':
      return {
        ...state,
        alert: {
          text: '',
          open: false,
        },
      };
    case 'REGISTER':
      const form = {
        id: 1,
        email: payload.email,
        premium: false,
        admin: false,
        until: '',
        payment: '',
        password: payload.password,
        cancel: false,
      };
      return {
        ...state,
        users: [...state.users, form],
      };
    case 'PAYMENT':
      console.log(payload);
      return {
        ...state,
        users: state.users.map((user) =>
          user.email === payload.accountnumber
            ? {
                ...user,
                payment: payload.payment,
              }
            : user
        ),
        alert: {
          type: 'success',
          text: 'Thank you for subscribing to premium, your premium package will be active after our admin approves your transaction, thank you',
          open: true,
        },
      };
    case 'ADD_MUSIC':
      console.log(payload);
      const newMusic = {
        ...payload,
        likes: [],
        id: uuid(),
      };
      return {
        ...state,
        musics: [...state.musics, newMusic],
        alert: {
          type: 'success',
          text: 'Music Added',
          open: 'true',
        },
      };
    case 'ADD_ARTIST':
      console.log(payload);
      const newArtist = {
        ...payload,
        id: uuid(),
      };
      return {
        ...state,
        artist: [...state.artist, newArtist],
        alert: {
          type: 'success',
          text: 'Artist Added',
          open: 'true',
        },
      };
    case 'APPROVE':
      return {
        ...state,
        users: state.users.map((user) => (user.email === payload ? { ...user, premium: true, cancel: false, until: new Date().setDate(new Date().getDate() + 30) } : user)),
        alert: {
          type: 'success',
          text: 'Approved',
          open: 'true',
        },
      };
    case 'CANCEL':
      return {
        ...state,
        users: state.users.map((user) => (user.email === payload ? { ...user, cancel: true, until: '', premium: false } : user)),
        alert: {
          type: 'success',
          text: 'Canceled',
          open: 'true',
        },
      };
    case 'SET_PLAYER':
      return {
        ...state,
        player: { isOpen: true, id: payload.id, queue: payload.queue },
      };
    case 'CLOSE_PLAYER':
      return {
        ...state,
        player: { isOpen: false },
      };
    case 'LIKE_MUSIC':
      const liked = state.musics.find((music) => music.id === payload.id);
      const like = liked.likes.find((like) => like === payload.email);
      if (!like) {
        liked.likes.push(payload.email);
        return {
          ...state,
          musics: state.musics.map((music) => (music.id === payload.id ? liked : music)),
        };
      } else {
        return {
          ...state,
        };
      }
    case 'DISLIKE_MUSIC':
      const disliked = state.musics.find((music) => music.id === payload.id);
      const dislikeIndex = disliked.likes.map((like) => like).indexOf(payload.email);
      if (disliked) {
        const newLikes = disliked.likes.map((dislike, index) => (index !== dislikeIndex ? dislike : null)).filter((like) => like !== null);
        return {
          ...state,
          musics: state.musics.map((music) => (music.id === payload.id ? { ...music, likes: newLikes } : music)),
        };
      } else {
        return {
          ...state,
        };
      }

    case 'ADD_PLAYLIST':
      const added = state.users.find((user) => user.email === payload.email);
      const add = added.playlist.find((play) => play === payload.id);
      if (!add) {
        added.playlist.push(String(payload.id));
        return {
          ...state,
          users: state.users.map((user) => (user.email === payload.email ? added : user)),
        };
      } else {
        return {
          ...state,
        };
      }
    case 'REMOVE_PLAYLIST':
      const removed = state.users.find((user) => user.email === payload.email);
      const removeIndex = removed.playlist.map((play) => play).indexOf(payload.id);

      if (removed) {
        const newPlaylist = removed.playlist.map((id, index) => (index !== removeIndex ? id : null)).filter((id) => id != null);
        const newRemoved = { ...removed, playlist: newPlaylist };
        return {
          ...state,
          users: state.users.map((user) => (user.email === payload.email ? newRemoved : user)),
          user: newRemoved,
        };
      } else {
        return {
          ...state,
        };
      }

    default:
      return state;
  }
};

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={[state, dispatch]}>{props.children}</AppContext.Provider>;
};

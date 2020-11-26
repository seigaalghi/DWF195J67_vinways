import { createContext, useReducer } from 'react';
import data from '../JSON/musicList.json';

export const AppContext = createContext();

const initialState = {
  ...data,
  isLogin: false,
  user: {},
  player: {
    isOpen: false,
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
        isLogin: false,
        user: {},
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
      };
    case 'ADD_MUSIC':
      console.log(payload);
      return {
        ...state,
        musics: [...state.musics, payload],
        alert: {
          type: 'success',
          text: 'Music Added',
          open: 'true',
        },
      };
    case 'ADD_ARTIST':
      console.log(payload);
      return {
        ...state,
        artist: [...state.artist, payload],
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
        player: { isOpen: true, ...payload },
      };
    case 'CLOSE_PLAYER':
      return {
        ...state,
        player: { isOpen: false },
      };
    default:
      return state;
  }
};

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={[state, dispatch]}>{props.children}</AppContext.Provider>;
};

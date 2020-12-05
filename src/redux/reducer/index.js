import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import music from './music';
import player from './player';

export default combineReducers({ auth, alert, music, player });

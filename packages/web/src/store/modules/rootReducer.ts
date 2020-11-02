import { combineReducers } from 'redux';
import { StoreState } from '../createStore';

import user from './user/reducer';
import auth from './auth/reducer';

export default combineReducers<StoreState>({ user, auth });

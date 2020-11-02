import { applyMiddleware, createStore, Middleware, Reducer } from 'redux';
import { AuthState, AuthAction } from './modules/auth/types';
import { UserAction, UserState } from './modules/user/types';

export interface StoreState {
  user: UserState;
  auth: AuthState;
}

export type StoreAction = UserAction | AuthAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[],
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};

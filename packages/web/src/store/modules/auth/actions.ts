import { action } from 'typesafe-actions';
import { IAuthRequest, IAuthResponse } from './types';

export function authRequest({ email, password }: IAuthRequest) {
  return action('@auth/SIGN_IN_REQUEST', { email, password });
}

export function authSuccess({ user, token }: IAuthResponse) {
  return action('@auth/SIGN_IN_SUCCESS', { user, token });
}

export function authFailure() {
  return action('@auth/SIGN_IN_FAILURE');
}

export function signOutRequest({ user, token }: IAuthResponse) {
  return action('@auth/SIGN_OUT_REQUEST', { user, token });
}

export function signOutSuccess({ user, token }: IAuthResponse) {
  return action('@auth/SIGN_OUT_SUCCESS', { user, token });
}

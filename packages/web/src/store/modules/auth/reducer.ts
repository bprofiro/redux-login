import { AuthAction, AuthState } from './types';

const INITIAL_STATE: AuthState = {
  loadingSignInRequest: false,
  isSigned: false,
  email: null,
  user: null,
  password: null,
  error: false,
  token: null,
};

export default function auth(
  state = INITIAL_STATE,
  action: AuthAction,
): AuthState {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return { ...state, loadingSignInRequest: true };
    case '@auth/SIGN_IN_SUCCESS':
      return {
        ...state,
        loadingSignInRequest: false,
        isSigned: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case '@auth/SIGN_IN_FAILURE':
      return {
        ...state,
        loadingSignInRequest: false,
        error: true,
      };
    case '@auth/SIGN_OUT_REQUEST':
      return {
        ...state,
        loadingSignInRequest: true,
      };
    case '@auth/SIGN_OUT_SUCCESS':
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    default:
      return state;
  }
}

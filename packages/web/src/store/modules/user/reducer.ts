import { UserAction, UserState } from './types';

const INITIAL_STATE: UserState = {
  loadingCreateUserRequest: false,
  email: null,
  name: null,
  password: null,
  error: false,
};

export default function user(
  state = INITIAL_STATE,
  action: UserAction,
): UserState {
  switch (action.type) {
    case '@user/CREATE_USER_REQUEST':
      return { ...state, loadingCreateUserRequest: true };
    case '@user/CREATE_USER_SUCCESS':
      return {
        ...state,
        loadingCreateUserRequest: false,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
    case '@user/CREATE_USER_FAILURE':
      return {
        ...state,
        loadingCreateUserRequest: false,
        error: true,
      };
    default:
      return state;
  }
}

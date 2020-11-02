import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type AuthAction = ActionType<typeof actions>;

export interface User {
  id: string | null;
  name: string | null;
  email: string | null;
  password: string | null;
}

export interface AuthState {
  readonly loadingSignInRequest: boolean;
  readonly isSigned: boolean;
  readonly user: User | null;
  readonly token: string | null;
  readonly email: string | null;
  readonly password: string | null;
  readonly error: boolean;
}

export interface IAuthRequest {
  email: string;
  password: string;
}

export interface IAuthResponse {
  user: User | null;
  token: string | null;
}

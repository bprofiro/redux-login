import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type UserAction = ActionType<typeof actions>;

export interface UserState {
  readonly loadingCreateUserRequest: boolean;
  readonly name: string | null;
  readonly email: string | null;
  readonly password: string | null;
  readonly error: boolean;
}

export interface ICreateUserRequest {
  name: string;
  email: string;
  password: string;
}

export interface ICreateUserResponse {
  id: string;
  name: string;
  email: string;
  password: string;
}

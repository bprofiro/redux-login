import { action } from 'typesafe-actions';
import { ICreateUserRequest, ICreateUserResponse } from './types';

export function createUserRequest({
  name,
  email,
  password,
}: ICreateUserRequest) {
  return action('@user/CREATE_USER_REQUEST', { name, email, password });
}

export function createUserSuccess({
  id,
  name,
  email,
  password,
}: ICreateUserResponse) {
  return action('@user/CREATE_USER_SUCCESS', { id, name, email, password });
}

export function createUserFailure() {
  return action('@user/CREATE_USER_FAILURE');
}

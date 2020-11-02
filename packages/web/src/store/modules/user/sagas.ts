import { all, takeLatest, put, call } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { AxiosResponse } from 'axios';
import * as actions from './actions';
import api from '../../../services/api';
import { ICreateUserResponse } from './types';

export function* createUser({
  payload,
}: ActionType<typeof actions.createUserRequest>) {
  try {
    const { name, email, password } = payload;

    const { data }: AxiosResponse<ICreateUserResponse> = yield call(
      api.post,
      '/users/create',
      { name, email, password },
    );

    yield put(
      actions.createUserSuccess({
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
      }),
    );
  } catch (err) {
    put(actions.createUserFailure());
  }
}

export default all([takeLatest('@user/CREATE_USER_REQUEST', createUser)]);

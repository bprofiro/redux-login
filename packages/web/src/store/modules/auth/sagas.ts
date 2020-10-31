import { all, takeLatest, put, call } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { AxiosResponse } from 'axios';
import * as actions from './actions';
import api from '../../../services/api';
import { IAuthResponse } from './types';

export function* auth({ payload }: ActionType<typeof actions.authRequest>) {
  try {
    const { email, password } = payload;

    const response: AxiosResponse<IAuthResponse> = yield call(
      api.post,
      '/users/signin',
      { email, password },
    );

    yield put(
      actions.authSuccess({
        user: response.data.user,
        token: response.data.token,
      }),
    );
  } catch (err) {
    put(actions.authFailure());
  }
}

export function* signOut({
  payload,
}: ActionType<typeof actions.signOutRequest>) {
  const { token, user } = payload;

  console.log(user, token, 'Cheguei aqui');

  yield put(
    actions.signOutSuccess({
      user: null,
      token: null,
    }),
  );
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', auth),
  takeLatest('@auth/SIGN_OUT_REQUEST', signOut),
]);

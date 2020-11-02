import { all } from 'redux-saga/effects';

import user from './user/sagas';
import auth from './auth/sagas';

export default function* rootSaga() {
  return yield all([user, auth]);
}

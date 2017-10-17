import { all, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from '../Features/User/UserRedux'
// Custom Sagas
import { loginAsync } from './user.saga'
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    yield takeEvery(ActionTypes.LOGIN, loginAsync),
  ]);
}

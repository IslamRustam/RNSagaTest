import { all } from 'redux-saga/effects';
import questionsSaga from '_store/sagas/questionSaga';

export default function*  rootSaga() {
  yield all([questionsSaga()]);
}

import { put, takeLeading, call, select } from 'redux-saga/effects';
import { QuestionActionTypes } from '_store/types/questions/actionTypes';
import { RootState } from '_store/types/system/systemTypes';
import { QuestionsAPI } from '_services/API/questionsApi';

export function* handleQuestionsLoad() {
  const amount = yield select<(arg0: RootState)
    => number | null >((store) => store.questions.amount);
  const difficulty = yield select<(arg0: RootState)
    => string | null >((store) => store.questions.difficulty);


  if (amount && difficulty) {
    try {
      const questions = yield call(QuestionsAPI.getQuestions, amount, difficulty);

      yield put( {
        type: QuestionActionTypes.QUESTION_RES,
        payload: questions.results,
      });

    } catch (e) {
      yield put({
        type: QuestionActionTypes.QUESTION_RES_ERR,
      });
    }
  } else {
    yield put({
      type: QuestionActionTypes.QUESTION_RES_ERR,
    });
  }
}

export default function* watchQuestions() {
  yield takeLeading(QuestionActionTypes.QUESTION_REQ, handleQuestionsLoad);
}

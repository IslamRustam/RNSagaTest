import {
  AnswerQuestion,
  QuestionActions,
  QuestionActionTypes as actTps,
  SetAmount,
  SetDifficulty, SetQuestions
} from '_store/types/questions/actionTypes';
import { setReqState } from '_store/types/system/systemTypes';
import { Question, QuestionDifficulty, QuestionsState } from '_store/types/questions/model';
import { decodeHTMLEntities } from '_utils/index';

const initialState: QuestionsState = {
  fetching: false,
  error: false,
  success: false,
  questions: [],
  amount: 0,
  difficulty: QuestionDifficulty.none,
  answers: [],
};

export default function questionsReducer(state = initialState, action: QuestionActions): QuestionsState {
  switch (action.type) {
  case actTps.QUESTION_REQ: {
    return { ...state, ...setReqState({ fetching: true }) };
  }
  case actTps.QUESTION_RES_ERR: {
    return { ...state, ...setReqState({ error: true }) };
  }
  case actTps.QUESTION_RES: {
    const questions = (action as SetQuestions).payload;

    const modifiedQuestions = questions.map((question: Question) => {
      return {
        ...question,
        question: decodeHTMLEntities(question.question),
        isAnsweredCorrectly: false
      };
    });

    return { ...state, questions: modifiedQuestions, ...setReqState({ success: true }) };
  }
  case actTps.SET_AMOUNT: {
    const amount = (action as SetAmount).payload;

    return { ...state, amount };
  }
  case actTps.SET_DIFFICULTY: {
    const difficulty = (action as SetDifficulty).payload;

    return { ...state, difficulty };
  }
  case actTps.ANSWER_QUESTION: {
    const answerData = (action as AnswerQuestion).payload;
    const questions = state.questions;

    const index = questions.findIndex( question => question.question === answerData.question);

    if (index !== -1 && questions[index].correct_answer === answerData.answer) {
      questions[index].isAnsweredCorrectly = true;
      return { ...state, questions: [...questions] };
    }

    return state;
  }
  default:
    return state;
  }
}


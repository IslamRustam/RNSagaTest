import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorPayload, RootState } from '_store/types/system/systemTypes';
import { Question, QuestionDifficulty, QuestionsState } from '_store/types/questions/model';
import { QuestionActionTypes, QuestionAnswerData } from '_store/types/questions/actionTypes';

interface QuestionsSelector {
  questions: Question[];
  amount: number;
  difficulty: QuestionDifficulty;
  loadQuestions: () => void;
  setAmount: (arg0: number) => void;
  setDifficulty: (arg0: string) => void;
  answerQuestion: (arg0: QuestionAnswerData) => void;
  error: ErrorPayload | boolean | null;
  fetching: boolean;
  success: boolean;
}

const questionsSelector = (state: RootState): Questions => {
  if (state.questions) {
    return {
      questions: state.questions.questions ?? [],
      amount: state.questions.amount ?? 0,
      answers: state.questions.answers ?? [],
      difficulty: state.questions.difficulty ?? QuestionDifficulty.none,
      fetching: state.questions.fetching ?? false,
      success: state.questions.success ?? false,
      error: state.questions.error ?? false,
    };
  } else {
    return {
      questions: [],
      amount: 0,
      answers: [],
      difficulty: QuestionDifficulty.none,
      fetching: false,
      success: false,
      error: false,
    };
  }
};

type Questions = {
  questions: Question[];
  amount: number;
  difficulty: QuestionDifficulty;
  answers: QuestionAnswerData[];
  error: ErrorPayload | boolean | null;
  fetching: boolean;
  success: boolean;
}

export function useQuestions(): QuestionsSelector {
  const {
    questions,
    error,
    success,
    fetching,
    difficulty,
    amount
  } = useSelector<RootState, QuestionsState>(questionsSelector);
  const dispatch = useDispatch();
  const loadQuestions = useCallback(() => dispatch({
    type: QuestionActionTypes.QUESTION_REQ
  }), [dispatch]);
  const setAmount = useCallback((amount) => dispatch({
    type: QuestionActionTypes.SET_AMOUNT, payload: amount
  }), [dispatch]);
  const setDifficulty = useCallback((difficulty) => dispatch({
    type: QuestionActionTypes.SET_DIFFICULTY, payload: difficulty
  }), [dispatch]);
  const answerQuestion = useCallback((answer) => dispatch({
    type: QuestionActionTypes.ANSWER_QUESTION, payload: answer
  }), [dispatch]);

  return {
    questions,
    loadQuestions,
    setAmount,
    difficulty,
    amount,
    setDifficulty,
    answerQuestion,
    error,
    success,
    fetching,
  };
}

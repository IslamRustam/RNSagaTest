import { Question, QuestionDifficulty } from '_store/types/questions/model';

export enum QuestionActionTypes {
  QUESTION_REQ = 'QUESTION_REQ',
  QUESTION_RES = 'QUESTION_RES',
  QUESTION_RES_ERR = 'QUESTION_RES_ERR',
  ANSWER_QUESTION = 'ANSWER_QUESTION',
  SET_AMOUNT = 'SET_AMOUNT',
  SET_DIFFICULTY = 'SET_DIFFICULTY',
}

export interface QuestionAnswerData {
  question: string;
  answer: string;
}

export interface Questions {
  type: QuestionActionTypes;
}

export interface SetQuestions {
  type: QuestionActionTypes.QUESTION_RES;
  payload: Question[];
}

export interface AnswerQuestion {
  type: QuestionActionTypes.ANSWER_QUESTION;
  payload: QuestionAnswerData;
}

export interface SetDifficulty {
  type: QuestionActionTypes.SET_DIFFICULTY;
  payload: QuestionDifficulty;
}

export interface SetAmount {
  type: QuestionActionTypes.SET_AMOUNT;
  payload: number;
}

export type QuestionActions = SetDifficulty | SetAmount | Questions | SetQuestions


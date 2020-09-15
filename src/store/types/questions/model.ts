import { ErrorPayload } from '_store/types/system/systemTypes';
import { QuestionAnswerData } from '_store/types/questions/actionTypes';

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  isAnsweredCorrectly: boolean;
}

export enum QuestionDifficulty {
  easy = 'easy',
  hard = 'hard',
  none = '',
}

export interface QuestionsState {
  questions: Question[];
  amount: number;
  difficulty: QuestionDifficulty;
  answers: QuestionAnswerData[];
  error: ErrorPayload | boolean | null;
  fetching: boolean;
  success: boolean;
}
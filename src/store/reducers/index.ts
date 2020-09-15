import { combineReducers } from  'redux';
import questionsReducer from '_store/reducers/questionsReducer';

const rootReducer = combineReducers({
  questions: questionsReducer
});

export default rootReducer;

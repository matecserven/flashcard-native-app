import { combineReducers } from 'redux';
import score from './scoreReducer';
import answerResult from './answerResultReducer';
import cards from './cardsReducer';
import session from './sessionReducer';

const rootReducer = combineReducers({
  answerResult,
  cards,
  session,
  score,
});

export default rootReducer;

import switchCaseFunc from '../utils/switchcase';

const initialState = {
  correct: 0,
  incorrect: 0,
};

const score = (state = initialState, action) =>
  switchCaseFunc({
    UPDATE_CORRECT: () => {
      return {
        ...state,
        correct: state.correct + 1,
      };
    },
    UPDATE_INCORRECT: () => {
      return {
        ...state,
        incorrect: state.incorrect + 1,
      };
    },
  })(state)(action.type);

export default score;

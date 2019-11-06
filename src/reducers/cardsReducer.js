import switchCaseFunc from '../utils/switchcase';

const initalState = {
  multipleAnswers: {},
  singleAnswer: {},
  currentQuestion: null,
};

const cards = (state = initalState, action) =>
  switchCaseFunc({
    UPDATE_CURRENT_QUESTION: () => {
      return {
        ...state,
        currentQuestion: action.payload,
      };
    },
    GET_CARDS: () => {
      return {
        ...state,
        [action.cardType]: action.payload,
      };
    },
    GET_CARDS_FAILED: () => {
      return {
        ...state,
        error: action.error,
      };
    },
  })(state)(action.type);

export default cards;

import switchCaseFunc from '../utils/switchcase';

const initalState = {
  chosenAnswer: '',
};

const answerResult = (state = initalState, action) =>
  switchCaseFunc({
    UPDATE_CHOSEN_ANSWER: () => {
      return {
        ...state,
        chosenAnswer: action.payload,
      };
    },
  })(state)(action.type);

export default answerResult;

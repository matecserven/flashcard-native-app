import switchCaseFunc from '../utils/switchcase';

const INITIAL_STATE = {
  authUser: null,
};

const session = (state = INITIAL_STATE, action) =>
  switchCaseFunc({
    AUTH_USER_SET: () => {
      return {
        ...state,
        authUser: action.payload,
      };
    },
  })(state)(action.type);

export default session;

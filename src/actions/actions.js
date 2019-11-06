export const updateCorrect = () => ({
  type: 'UPDATE_CORRECT',
});

export const updateInCorrect = () => ({
  type: 'UPDATE_INCORRECT',
});

export const updateChosenAnswer = (payload) => ({
  type: 'UPDATE_CHOSEN_ANSWER',
  payload,
});

export const updateCurrentQuestion = (payload) => ({
  type: 'UPDATE_CURRENT_QUESTION',
  payload,
});

export const getCards = (payload, cardType) => ({
  type: 'GET_CARDS',
  payload,
  cardType,
});

export const getCardsFailed = (error) => ({
  type: 'GET_CARDS_FAILED',
  error,
});

export const authUserSet = (payload) => ({
  type: 'AUTH_USER_SET',
  payload,
});

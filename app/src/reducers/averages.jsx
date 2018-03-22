import { GET_AVERAGES, RECEIVE_AVERAGES } from './../constants';

const averages = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case GET_AVERAGES:
      return Object.assign({}, state, { isLoading: true });

    case RECEIVE_AVERAGES:
      return Object.assign({}, state, {
        isLoading: false,
        averages: action.averages,
      });

    default:
      return state;
  }
};

export default averages;

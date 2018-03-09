import { GET_AVERAGES, RECEIVE_AVERAGES } from './../constants';
import { setAverages } from './../actions';
import { store } from './../index';

const BASE_URL = 'http://localhost:4567/api';

const getAverages = (action) => {
  const { traveledWith } = action;
  const AVERAGES_URL = `${BASE_URL}/averages`;
  const url = traveledWith ? `${AVERAGES_URL}?traveledWith=${traveledWith}` : AVERAGES_URL;
  fetch(url, {
    method: 'GET',
  })
    .then(response => response.json())
    .then((json) => {
      store.dispatch(setAverages(json));
    });
};

const averages = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case GET_AVERAGES:
      getAverages(action);
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

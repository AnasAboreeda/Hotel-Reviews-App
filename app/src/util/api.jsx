import { store } from './../index';
import { setAverages, setReviews } from './../actions/index';

const BASE_URL = 'http://localhost:4567/api';

export const fetchAverages = (action) => {
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

export const fetchReviews = (action) => {
  const { traveledWith } = action;
  const REVIEWS_URL = `${BASE_URL}/reviews?sort=${action.sortBy}&page=${action.page}`;
  const url = traveledWith ? `${REVIEWS_URL}&traveledWith=${traveledWith}` : REVIEWS_URL;
  fetch(url, {
    method: 'GET',
  })
    .then(response => response.json())
    .then((json) => {
      store.dispatch(setReviews(json));
    });
};

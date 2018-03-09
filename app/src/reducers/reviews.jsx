import { REQUEST_REVIEWS, RECEIVE_REVIEWS } from './../constants';
import { setReviews } from './../actions';
import { store } from './../index';

const BASE_URL = 'http://localhost:4567/api';

const getReviews = (action) => {
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

const reviews = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case REQUEST_REVIEWS:
      getReviews(action);
      return Object.assign({}, state, { isLoading: true });

    case RECEIVE_REVIEWS:
      const newReviews = action.reviews;
      return Object.assign({}, state, {
        isLoading: false,
        reviews: newReviews.reviews,
        currentPage: newReviews.currentPage,
        lastPage: newReviews.lastPage,
        sort: newReviews.sort,
        traveledWith: newReviews.traveledWith,
      });

    default:
      return state;
  }
};

export default reviews;

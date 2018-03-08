import { REQUEST_REVIEWS, RECEIVE_REVIEWS } from './../constants';
import {setReviews} from './../actions';
import {store} from './../index.js';

const BASE_URL = 'http://localhost:4567/api';

const getReviews = (action) => {
  const traveledWith = action.traveledWith;
  const REVIEWS_URL = `${BASE_URL}/reviews?sort=${action.sortBy}&page=${action.page}`
  const url = traveledWith ? `${REVIEWS_URL}&traveledWith=${traveledWith}` : REVIEWS_URL;
  fetch(url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      store.dispatch(setReviews(json));
    });
};

const reviews = (state = {isLoading: false}, action) => {
  switch (action.type) {
    case REQUEST_REVIEWS:
      getReviews(action);
      return Object.assign({}, state, {isLoading: true});

    case RECEIVE_REVIEWS:
      const {reviews} = action;
      return Object.assign({}, state, {
        isLoading: false,
        reviews: reviews.reviews,
        currentPage: reviews.currentPage,
        lastPage: reviews.lastPage,
        sort: reviews.sort,
        traveledWith: reviews.traveledWith
      });

    default:
      return state;
  }
}

export default reviews;

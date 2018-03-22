import { REQUEST_REVIEWS, RECEIVE_REVIEWS } from './../constants';


const reviews = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case REQUEST_REVIEWS:
      return Object.assign({}, state, { isLoading: true });

    case RECEIVE_REVIEWS:
      return Object.assign({}, state, {
        isLoading: false,
        reviews: action.reviews.reviews,
        currentPage: action.reviews.currentPage,
        lastPage: action.reviews.lastPage,
        sort: action.reviews.sort,
        traveledWith: action.reviews.traveledWith,
      });
    default:
      return state;
  }
};

export default reviews;

import { REQUEST_REVIEWS, RECEIVE_REVIEWS, GET_AVERAGES, RECEIVE_AVERAGES } from './../constants';
import { fetchAverages, fetchReviews } from './../util/api';

export const getReviews = (options) => {
  const action = {
    type: REQUEST_REVIEWS,
    sortBy: options.sort || 'entryDate',
    traveledWith: options.traveledWith,
    page: options.page || 1,
  };
  fetchReviews(action);
  return action;
};

export const setReviews = (reviews) => {
  const action = {
    type: RECEIVE_REVIEWS,
    reviews,
  };
  return action;
};

export const getAverages = (options) => {
  const action = {
    type: GET_AVERAGES,
    traveledWith: options ? options.traveledWith : null,
  };
  fetchAverages(action);
  return action;
};

export const setAverages = (averages) => {
  const action = {
    type: RECEIVE_AVERAGES,
    averages,
  };
  return action;
};

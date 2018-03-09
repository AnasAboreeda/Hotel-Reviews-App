import { combineReducers } from 'redux';
import averages from './averages';
import reviews from './reviews';

export default combineReducers({
  reviews,
  averages,
});

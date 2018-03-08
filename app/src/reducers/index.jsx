import { combineReducers } from 'redux';
import averages from './averages.jsx';
import reviews from './reviews.jsx';

export default combineReducers({
  reviews,
  averages
});

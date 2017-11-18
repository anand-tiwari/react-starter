/* Root reducer that import all reducers and combine them into one reducer */
import { combineReducers } from 'redux';
import courses from './courseReducer';
import products from './productReducer';

/* this courses is coming from import which is pointing to courseReducer.js file*/

const rootReducer = combineReducers({
  courses,
  products
});

export default rootReducer;

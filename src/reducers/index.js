/* Root reducer that import all reducers and combine them into one reducer */
import { combineReducers } from 'redux';
import course from './courseReducer';

/* this courses is coming from import which is pointing to courseReducer.js file*/

const rootReducer = combineReducers({
  course
});

export default rootReducer;

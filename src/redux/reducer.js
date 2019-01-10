import { combineReducers } from 'redux';
import { todoReducer as todos } from './todo';

export default combineReducers({
  todos,
});

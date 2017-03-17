import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import flash from './flash';
import categories from './categories'

const rootReducer = combineReducers({
  routing: routerReducer,
  user,
  flash,
  categories
});

export default rootReducer;

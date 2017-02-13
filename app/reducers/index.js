// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import articles from './articles';
import sources from './sources';
import menu from './menu';

const rootReducer = combineReducers({
  articles,
  sources,
  menu,
  routing,
});

export default rootReducer;

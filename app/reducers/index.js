// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import articles from './articles';
import sources from './sources';
import menu from './menu';

const rootReducer = combineReducers({
  counter,
  articles,
  sources,
  menu,
  routing
});

export default rootReducer;

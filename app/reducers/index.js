// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import articles from './articles';
import sources from './sources';

const rootReducer = combineReducers({
  counter,
  articles,
  sources,
  routing
});

export default rootReducer;

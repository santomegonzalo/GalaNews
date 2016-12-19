// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import ArticlesPage from './containers/ArticlesPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={ArticlesPage} />
    <Route path="/home" component={HomePage} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);

// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import ArticlesPage from './containers/ArticlesPage';
import SourcesPage from './containers/SourcesPage';

export class RouterDefinition {
  init(haveSources : boolean) {
    const routes = (
      <Route path="/" component={App}>
        <IndexRoute component={haveSources ? ArticlesPage : SourcesPage} />
        <Route path="/sources" component={SourcesPage} />
        <Route path="/articles" component={ArticlesPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/counter" component={CounterPage} />
      </Route>
    );

    return routes;
  }
}

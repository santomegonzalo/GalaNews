// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
// import ArticlesPage from './containers/ArticlesPage';
// import SourcesPage from './containers/SourcesPage';

export class RouterDefinition {
  init(haveSources : boolean) {
    console.log('=======');
    console.log(haveSources);
    console.log('=======');
    console.log(App);
    // console.log('=======');
    // console.log(SourcesPage);
    // console.log('=======');
    // console.log(ArticlesPage);
    const routes = (
      <Route path="/" component={App}>
        {/* <IndexRoute component={haveSources ? ArticlesPage : SourcesPage} />
        <Route path="/sources" component={SourcesPage} />
        <Route path="/articles" component={ArticlesPage} /> */}
      </Route>
    );

    return routes;
  }
}

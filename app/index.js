import './app.global.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { RouterDefinition } from './routes';
import configureStore from './store/configureStore';
import db from './db';

const Routes = new RouterDefinition();

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

db.getSources().then((sources) => {
  const haveSources = sources.length > 0;
  const routes = Routes.init(haveSources);

  render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('root'),
  );
});

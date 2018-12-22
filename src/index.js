import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import 'nes.css/css/nes.min.css';

import App from 'components/App';
import initMonkeyPatches from 'shared/monkey-patches';
import reducer from 'reducers';
import 'styles/index.scss';

initMonkeyPatches();
const history = createBrowserHistory();

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer(history),
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
    ),
  ),
);

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById('root'),
);

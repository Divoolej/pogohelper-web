import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import reducer from 'reducers';

import App from '.';

const history = createBrowserHistory();

const store = createStore(
  reducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
    ),
  ),
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={store} history={history} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

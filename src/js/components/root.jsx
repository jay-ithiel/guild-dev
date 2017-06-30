import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { isUserSignedIn } from 'blockstack';

// Components
import App from './app';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ createBrowserHistory() }>
      <App />
    </Router>
  </Provider>
);

export default Root;

import React from "react";
import { Provider } from 'react-redux';
import App from './app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
        </Route>
      </Router>
    </Provider>
 );
};

export default Root;

import React from "react";
import { Provider } from 'react-redux';
import App from './app';
import chatApp from './chat_app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SignupContainer from './signup/signup_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/signup');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <Route path="signup" component={SignupContainer} onEnter={_redirectIfLoggedIn} />
        </Route>
        <Route path="/messages" component={chatApp} >

        </Route>
      </Router>
    </Provider>
 );
};

export default Root;

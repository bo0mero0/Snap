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
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={SignupContainer}/>
        </Route>
        <Route path="/messages" component={chatApp} onEnter={_ensureLoggedIn} >

        </Route>
      </Router>
    </Provider>
 );
};

// <Route path="signup" component={SignupContainer} />
export default Root;

import React from "react";
import { Provider } from 'react-redux';
import App from './app';
import chatApp from './chat_app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SignupContainer from './signup/signup_container';
import MessageContainer from './message/message_container';
import ChannelContainer from './channel/channel_container';
import { changeChannel, fetchChannels, fetchSubscribeChannels, fetchNoti, fetchOnlineChannels } from '../actions/channel_actions';
import { fetchMessages } from '../actions/message_actions';
import { fetchAllUsers, goOnline } from '../actions/session_actions';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      hashHistory.push('/');
    }
  };

  const _changeCurrentChannel = (state) => {
    store.dispatch(changeChannel(state.params.channelName));
    store.dispatch(fetchMessages(state.params.channelName));

  };

  const _fetchChannels = () => {
    _ensureLoggedIn();
    store.dispatch(fetchAllUsers());
    store.dispatch(fetchSubscribeChannels(store.getState().session.currentUser.id));
    store.dispatch(fetchChannels());
    store.dispatch(fetchOnlineChannels());
    store.dispatch(fetchNoti(store.getState().session.currentUser.id));
    store.dispatch(goOnline(store.getState().session.currentUser.username));
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={SignupContainer}/>
        </Route>
        <Route path="/messages" component={ChannelContainer} onEnter={_fetchChannels} >
          <Route path=":channelName" component={MessageContainer} onEnter={_changeCurrentChannel} />
        </Route>
      </Router>
    </Provider>
 );
};

// <Route path=":channelName" component={ChannelContainer} onEnter={_changeCurrentChannel} />
// <Route path="signup" component={SignupContainer} />
export default Root;

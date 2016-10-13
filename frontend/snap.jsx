import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal';
import { receiveFocus } from './actions/message_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const initialState = {session: {currentUser: window.currentUser}};
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }
  window.addEventListener("focus", function(event) {
    document.title = "Snap";
    document.getElementById('favicon').href = "/assets/nib-flat.png";
    store.dispatch(receiveFocus(true));
  }, false);
  window.addEventListener("blur", function(event) {
    store.dispatch(receiveFocus(false));
  }, false);
  window.store = store;
  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={store} />, root);
});

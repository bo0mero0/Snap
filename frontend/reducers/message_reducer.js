import merge from 'lodash/merge';

import {
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE,
  DELETE_MESSAGE,
  RECEIVE_MESSAGE_ERRORS,
  RECEIVE_NOTIFICATION,
  RECEIVE_NOTIFICATIONS,
  RECEIVE_DELETE_NOTI,
  RECEIVE_FOCUS
} from '../actions/message_actions';

const _defaultState = Object.freeze({
  messages: {},
  messageErrors: [],
  notification: {},
  focus: true
});

const MessageReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_MESSAGES:
      let receiveMessages = merge({}, state);
      receiveMessages.messages = action.messages;
      return receiveMessages;
    case DELETE_MESSAGE:
      let newMessages = {};
      newMessage = state;
      delete newMessages.messages[action.messageId];
      return merge({}, {messages: newMessages});
    case RECEIVE_MESSAGE_ERRORS:
      const messageErrors = action.messageErrors;
      return merge({}, state, messageErrors);
    case RECEIVE_MESSAGE:
      const newState = state;
      newState.messages[action.message.id] = action.message;
      return newState;
    case RECEIVE_NOTIFICATION:
      let notiState = merge({}, state);
      if (notiState.notification[action.channelName]) {
        notiState.notification[action.channelName] += 1
      } else {
        notiState.notification[action.channelName] = 1
      }
      return notiState
    case RECEIVE_NOTIFICATIONS:
      let notisState = merge({}, state);
      notisState.notification = action.notifications;
      return notisState;
    case RECEIVE_DELETE_NOTI:
      let delNotiState = merge({}, state);
      delete delNotiState.notification[action.channelName];
      return delNotiState;
    case RECEIVE_FOCUS:
      let focusState = merge({}, state);
      focusState.focus = action.focus;
      return focusState;
    default:
      return state;

  }
};

export default MessageReducer;

import merge from 'lodash/merge';

import {
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE,
  DELETE_MESSAGE,
  RECEIVE_MESSAGE_ERRORS,
  RECEIVE_NOTIFICATION
} from '../actions/message_actions';

const _defaultState = Object.freeze({
  messages: {},
  messageErrors: [],
  notification: {}
});

const MessageReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return merge({}, state, {messages: action.messages});
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
    default:
      return state;

  }
};

export default MessageReducer;

import merge from 'lodash/merge';

import {
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE,
  DELETE_MESSAGE,
  RECEIVE_MESSAGE_ERRORS
} from '../actions/message_actions';

const _defaultState = Object.freeze({
  messages: {},
  messageErrors: []
});

const MessageReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return merge({}, {messages: action.messages});
    case DELETE_MESSAGE:
      let newMessages = {};
      newMessage = state.messages;
      delete newMessages[action.messageId];
      return merge({}, {messages: newMessages});
    case RECEIVE_MESSAGE_ERRORS:
      const messageErrors = action.messageErrors;
      return merge({}, state, messageErrors);
    case RECEIVE_MESSAGE:
      const newState = state;
      newState.messages[action.message.id] = action.message;
      return newState;
    default:
      return state;

  }
};

export default MessageReducer;

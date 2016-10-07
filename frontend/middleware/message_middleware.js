import {
  receiveMessages,
  receiveMessage,
  receiveMessageErrors,
  CREATE_MESSAGE,
  DELETE_MESSAGE,
  FETCH_MESSAGES
} from '../actions/message_actions';

import {
  fetchMessages,
  deleteMessage,
  createMessage
} from '../util/message_api_util';

export default ({getState, dispatch}) => next => action => {
  const successMessageCallback = messages => dispatch(receiveMessages(messages));
  const successReceiveMessageCallback = message => dispatch(receiveMessage(message));
  const messageErrorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveMessageErrors(errors));
  };

  switch (action.type) {
    case CREATE_MESSAGE:
      createMessage(action.message, successReceiveMessageCallback, messageErrorCallback);
      return next(action);
    case DELETE_MESSAGE:
      deleteMessage(action.messageId, () => next(action), messageErrorCallback);
      break;
    case FETCH_MESSAGES:
      fetchMessages(successMessageCallback, messageErrorCallback);
      return next(action);
    default:
      return next(action);
  }
}

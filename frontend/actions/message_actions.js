export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const FETCH_MESSAGES = "FETCH_MESSAGES";
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_NOTIFICATION = "RECEIVE_NOTIFICATION"


export const createMessage = (message) => ({
  type: CREATE_MESSAGE,
  message
});

export const deleteMessage = (messageId) => ({
  type: DELETE_MESSAGE,
  messageId
});

export const fetchMessages = (channelName) => ({
  type: FETCH_MESSAGES,
  channelName
});

export const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const receiveMessageErrors = (messageErrors) => ({
  type: RECEIVE_MESSAGE_ERRORS,
  messageErrors
});

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

export const receiveNotification = (channelName) => ({
 type: RECEIVE_NOTIFICATION,
 channelName
});

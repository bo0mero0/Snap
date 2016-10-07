export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const FETCH_MESSAGES = "FETCH_MESSAGES";
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";


export const createMessage = (message) => ({
  type: CREATE_MESSAGE,
  message
});

export const deleteMessage = (messageId) => ({
  type: DELETE_MESSAGE,
  messageId
});

export const fetchMessages = () => ({
  type: FETCH_MESSAGES
});

export const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const receiveMessageErrors = (messageErrors) => ({
  type: RECEIVE_MESSAGE_ERRORS,
  messageErrors
});

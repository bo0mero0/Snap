export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const FETCH_MESSAGES = "FETCH_MESSAGES";
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_NOTIFICATION = "RECEIVE_NOTIFICATION";
export const RECEIVE_NOTIFICATIONS = "RECEIVE_NOTIFICATIONS";
export const RECEIVE_DELETE_NOTI = "RECEIVE_DELETE_NOTI";
export const RECEIVE_FOCUS = "RECEIVE_FOCUS";


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

export const receiveNotifications = (notifications) => ({
 type: RECEIVE_NOTIFICATIONS,
 notifications
});

export const receiveDeleteNoti = (channelName) => ({
  type: RECEIVE_DELETE_NOTI,
  channelName
});

export const receiveFocus = (focus) => ({
  type: RECEIVE_FOCUS,
  focus
});

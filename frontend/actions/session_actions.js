export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";
export const RECEIVE_LOGIN_ERRORS = "RECEIVE_LOGIN_ERRORS";
export const FETCH_ALL_USERS = "FETCH_ALL_USERS";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const GO_ONLINE = "GO_ONLINE";
export const GO_OFFLINE = "GO_OFFLINE";

export const signup = user => ({
  type: SIGNUP,
  user
});

export const login = user => ({
  type: LOGIN,
  user
});

export const logout = () => ({
  type: LOGOUT
});

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSignupErrors = errors => ({
  type: RECEIVE_SIGNUP_ERRORS,
  errors
});

export const receiveLoginErrors = errors => ({
  type: RECEIVE_LOGIN_ERRORS,
  errors
});

export const fetchAllUsers = () => ({
  type: FETCH_ALL_USERS
});

export const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const goOnline = (username) => ({
  type: GO_ONLINE,
  username
});

export const goOffline = (username) => ({
  type: GO_OFFLINE,
  username
});

import { RECEIVE_CURRENT_USER,
        LOGOUT,
        RECEIVE_LOGIN_ERRORS,
        RECEIVE_SIGNUP_ERRORS,
        RECEIVE_ALL_USERS
        } from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  currentUser: null,
  allUsers: null,
  loginErrors: [],
  signupErrors: []
});

const SessionReducer = (state = _defaultState, action) => {
  switch(action.type) {
  case RECEIVE_CURRENT_USER:
    const currentUser = action.currentUser;
    return merge({}, state, {
      currentUser
    });
  case LOGOUT:
    let logoutState = merge({}, state);
    logoutState.currentUser = null;
    return logoutState;
  case RECEIVE_SIGNUP_ERRORS:
    const signupErrors = action.errors;
    return merge({}, state, {
      signupErrors
    });
  case RECEIVE_LOGIN_ERRORS:
    const loginErrors = action.errors;
    return merge({}, state, {
      loginErrors
    });
  case RECEIVE_ALL_USERS:
    return merge({}, state, {allUsers: action.users});
  default:
    return state;
  }
};

export default SessionReducer;

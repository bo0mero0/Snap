import { RECEIVE_CURRENT_USER,
        LOGOUT,
        RECEIVE_LOGIN_ERRORS,
        RECEIVE_SIGNUP_ERRORS
        } from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  currentUser: null,
  loginErrors: [],
  signupErrors: []
});

const SessionReducer = (state = _defaultState, action) => {
  switch(action.type) {
  case RECEIVE_CURRENT_USER:
    const currentUser = action.currentUser;
    return merge({}, _defaultState, {
      currentUser
    });
  case LOGOUT:
    return merge({}, _defaultState);
  case RECEIVE_SIGNUP_ERRORS:
    const signupErrors = action.errors;
    return merge({}, _defaultState, {
      signupErrors
    });
  case RECEIVE_LOGIN_ERRORS:
    const loginErrors = action.errors;
    return merge({}, _defaultState, {
      loginErrors
    });
  default:
    return state;
  }
};

export default SessionReducer;

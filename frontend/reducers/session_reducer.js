import { RECEIVE_CURRENT_USER,
        LOGOUT,
        RECEIVE_ERRORS
        } from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  currentUser: null,
  errors: []
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
  case RECEIVE_ERRORS:
    const errors = action.errors;
    return merge({}, _defaultState, {
      errors
    });
  default:
    return state;
  }
};

export default SessionReducer;

import { receiveCurrentUser,
         receiveSignupErrors,
         receiveLoginErrors,
         receiveAllUsers,
         GO_ONLINE,
         GO_OFFLINE,
         FETCH_ALL_USERS,
         LOGIN,
         LOGOUT,
         SIGNUP
       } from '../actions/session_actions';

import { login, signup, logout, fetchAllUsers, goOnline, goOffline } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const successAllUserCallback = users => dispatch(receiveAllUsers(users));
  const loginErrorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveLoginErrors(errors));
  };
  const signupErrorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveSignupErrors(errors));
  };

  switch(action.type){
    case LOGIN:
      login(action.user, successCallback, loginErrorCallback);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    case SIGNUP:
      signup(action.user, successCallback, signupErrorCallback);
      return next(action);
    case FETCH_ALL_USERS:
      fetchAllUsers(successAllUserCallback);
      return next(action);
    case GO_ONLINE:
      goOnline(action.username);
      return next(action);
    case GO_OFFLINE:
      goOffline(action.username);
      return next(action);
    default:
      return next(action);
  }
};

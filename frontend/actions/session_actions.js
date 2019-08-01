import * as session_util from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const login = (user) => dispatch => {
  return session_util.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail((errors) => {
      dispatch(receiveErrors(errors.responseJSON))
    });;
};

export const logout = () => dispatch => {
  return session_util.logout()
    .then(() => dispatch(logoutCurrentUser()))
    .fail((errors) => {
      dispatch(receiveErrors(errors.responseJSON))
    });
};

export const signup = (user) => dispatch => {
  return session_util.signup(user)
    .then(user => {
      dispatch(receiveCurrentUser(user))
    })
    .fail((errors) => {
      dispatch(receiveErrors(errors.responseJSON))
    });
};

export const clearErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS,
  };
};

const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  };
};
import {
  FETCH_SIGN_UP_REQUEST,
  FETCH_SIGN_UP_SUCCESS,
  FETCH_SIGN_UP_FAILED,
  FETCH_SIGN_IN_REQUEST,
  FETCH_SIGN_IN_SUCCESS,
  FETCH_SIGN_IN_FAILED,
  FETCH_SIGN_IN_CHECK_AFTER_RELOAD,
  FETCH_SIGN_UP_USER_TYPE_REQUEST,
  FETCH_SIGN_UP_USER_TYPE_SUCCESS,
  FETCH_SIGN_UP_USER_TYPE_FAILED,
  FETCH_SIGN_OUT,
} from './constants';

// Sign Up
export const actFetchSignUpRequest = (user) => {
  return {
    type: FETCH_SIGN_UP_REQUEST,
    user,
  };
};

export const actFetchSignUpSuccess = (user) => {
  return {
    type: FETCH_SIGN_UP_SUCCESS,
    user,
  };
};

export const actFetchSignUpFailed = (err) => {
  return {
    type: FETCH_SIGN_UP_FAILED,
    err,
  };
};

// Sign In
export const actFetchSignInRequest = (user, history, from) => {
  return {
    type: FETCH_SIGN_IN_REQUEST,
    user,
    history,
    from,
  };
};

export const actFetchSignInSuccess = (signInUser) => {
  return {
    type: FETCH_SIGN_IN_SUCCESS,
    signInUser,
  };
};

export const actFetchSignInFailed = (err) => {
  return {
    type: FETCH_SIGN_IN_FAILED,
    err,
  };
};

export const actSignInCheckAfterReload = () => {
  return {
    type: FETCH_SIGN_IN_CHECK_AFTER_RELOAD,
  };
};

// Sign Out
export const actSignOut = () => {
  return {
    type: FETCH_SIGN_OUT,
  };
};

// UserType
export const actFetchSignUpUserTypeRequest = () => {
  return {
    type: FETCH_SIGN_UP_USER_TYPE_REQUEST,
  };
};

export const actFetchSignUpUserTypeSuccess = (userType) => {
  return {
    type: FETCH_SIGN_UP_USER_TYPE_SUCCESS,
    userType,
  };
};

export const actFetchSignUpUserTypeFailed = (err) => {
  return {
    type: FETCH_SIGN_UP_USER_TYPE_FAILED,
    err,
  };
};

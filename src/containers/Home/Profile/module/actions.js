import {
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILED,
} from './constants';

export const actFetchUserProfileRequest = (account) => {
  return {
    type: FETCH_USER_PROFILE_REQUEST,
    account,
  };
};

export const actFetchUserProfileSuccess = (userInfo) => {
  return {
    type: FETCH_USER_PROFILE_SUCCESS,
    userInfo,
  };
};

export const actFetchUserProfileFailed = (error) => {
  return {
    type: FETCH_USER_PROFILE_FAILED,
    error,
  };
};

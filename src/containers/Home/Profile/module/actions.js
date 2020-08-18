import {
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILED,
  FETCH_USER_PROFILE_UPDATE_REQUEST,
  FETCH_USER_PROFILE_UPDATE_SUCCESS,
  FETCH_USER_PROFILE_UPDATE_FAILED,
  FETCH_USER_PROFILE_UPDATED_RESET,
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

// Update user info
export const actFetchUserProfileUpdateRequest = (updateUserInfo) => {
  return {
    type: FETCH_USER_PROFILE_UPDATE_REQUEST,
    updateUserInfo,
  };
};

export const actFetchUserProfileUpdateSuccess = (userInfoUpdated) => {
  return {
    type: FETCH_USER_PROFILE_UPDATE_SUCCESS,
    userInfoUpdated,
  };
};

export const actFetchUserProfileUpdateFailed = (error) => {
  return {
    type: FETCH_USER_PROFILE_UPDATE_FAILED,
    error,
  };
};

// Clear all update state ready for next update after re-sign in
export const actFetchUserProfileUpdateReset = () => {
  return {
    type: FETCH_USER_PROFILE_UPDATED_RESET,
  };
};

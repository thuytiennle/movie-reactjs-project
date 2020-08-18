import {
  FETCH_LIST_USER_REQUEST,
  FETCH_LIST_USER_SUCCESS,
  FETCH_LIST_USER_FAILED,
} from './constants';

export const actFetchListUserRequest = () => {
  return {
    type: FETCH_LIST_USER_REQUEST,
  };
};

export const actFetchListUserSuccess = (listUser) => {
  return {
    type: FETCH_LIST_USER_SUCCESS,
    listUser,
  };
};

export const actFetchListUserFailed = (error) => {
  return {
    type: FETCH_LIST_USER_FAILED,
    error,
  };
};

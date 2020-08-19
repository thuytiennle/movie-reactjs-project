import {
  FETCH_LIST_USER_REQUEST,
  FETCH_LIST_USER_SUCCESS,
  FETCH_LIST_USER_FAILED,
  FETCH_ADD_USER_REQUEST,
  FETCH_ADD_USER_SUCCESS,
  FETCH_ADD_USER_FAILED,
  FETCH_DELETE_USER_REQUEST,
  FETCH_DELETE_USER_SUCCESS,
  FETCH_DELETE_USER_FAILED,
  FETCH_UPDATE_USER_REQUEST,
  FETCH_UPDATE_USER_SUCCESS,
  FETCH_UPDATE_USER_FAILED,
  OPEN_EDIT_DIALOG,
  CLOSE_EDIT_DIALOG,
  FETCH_SEARCH_USER_REQUEST,
  FETCH_SEARCH_USER_SUCCESS,
  FETCH_SEARCH_USER_FAILED,
} from './constants';

// Call user list
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

// Add user
export const actFetchAddUserRequest = (addUser) => {
  return {
    type: FETCH_ADD_USER_REQUEST,
    addUser,
  };
};

export const actFetchAddUserSuccess = (user) => {
  return {
    type: FETCH_ADD_USER_SUCCESS,
    user,
  };
};

export const actFetchAddUserFailed = (error) => {
  return {
    type: FETCH_ADD_USER_FAILED,
    error,
  };
};

// Delete user
export const actFetchDeleteUserRequest = (deleteAccount) => {
  return {
    type: FETCH_DELETE_USER_REQUEST,
    deleteAccount,
  };
};

export const actFetchDeleteUserSuccess = (data) => {
  return {
    type: FETCH_DELETE_USER_SUCCESS,
    data,
  };
};

export const actFetchDeleteUserFailed = (error) => {
  return {
    type: FETCH_DELETE_USER_FAILED,
    error,
  };
};

// Update or Edit user
export const actFetchUpdateUserRequest = (updateUser) => {
  return {
    type: FETCH_UPDATE_USER_REQUEST,
    updateUser,
  };
};

export const actFetchUpdateUserSuccess = (data) => {
  return {
    type: FETCH_UPDATE_USER_SUCCESS,
    data,
  };
};

export const actFetchUpdateUserFailed = (error) => {
  return {
    type: FETCH_UPDATE_USER_FAILED,
    error,
  };
};
export const actOpenEditDialog = (editUser) => {
  return {
    type: OPEN_EDIT_DIALOG,
    editUser,
  };
};

export const actCloseEditDialog = () => {
  return {
    type: CLOSE_EDIT_DIALOG,
  };
};

// Search User
export const actFetchSearchUserRequest = (keyword) => {
  return {
    type: FETCH_SEARCH_USER_REQUEST,
    keyword,
  };
};

export const actFetchSearchUserSuccess = (data) => {
  return {
    type: FETCH_SEARCH_USER_SUCCESS,
    data,
  };
};

export const actFetchSearchUserFailed = (error) => {
  return {
    type: FETCH_SEARCH_USER_FAILED,
    error,
  };
};

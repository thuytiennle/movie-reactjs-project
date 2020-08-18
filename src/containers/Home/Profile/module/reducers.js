import {
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILED,
  FETCH_USER_PROFILE_UPDATE_REQUEST,
  FETCH_USER_PROFILE_UPDATE_SUCCESS,
  FETCH_USER_PROFILE_UPDATE_FAILED,
  FETCH_USER_PROFILE_UPDATED_RESET,
} from './constants';

const initialState = {
  userProfile: {},
  loadingUserProfile: true,
  errorUserProfile: null,
  userProfileUpdated: {},
  loadingUserProfileUpdated: true,
  errorUserProfileUpdated: {},
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE_REQUEST:
      state.userProfile = {};
      state.loadingUserProfile = true;
      state.errorUserProfile = null;
      return { ...state };
    case FETCH_USER_PROFILE_SUCCESS:
      state.userProfile = action.userInfo;
      state.loadingUserProfile = false;
      state.errorUserProfile = null;
      return { ...state };
    case FETCH_USER_PROFILE_FAILED:
      state.userProfile = {};
      state.loadingUserProfile = true;
      state.errorUserProfile = action.error;
      return { ...state };
    // Update user Info
    case FETCH_USER_PROFILE_UPDATE_REQUEST:
      state.userProfileUpdated = {};
      state.loadingUserProfileUpdated = true;
      state.errorUserProfileUpdated = {};
      return { ...state };
    case FETCH_USER_PROFILE_UPDATE_SUCCESS:
      state.userProfileUpdated = action.userInfoUpdated;
      state.loadingUserProfileUpdated = false;
      state.errorUserProfileUpdated = {};
      return { ...state };
    case FETCH_USER_PROFILE_UPDATE_FAILED:
      state.userProfileUpdated = {};
      state.loadingUserProfileUpdated = false;
      state.errorUserProfileUpdated = action.error;
      return { ...state };
    case FETCH_USER_PROFILE_UPDATED_RESET:
      state.userProfileUpdated = {};
      state.loadingUserProfileUpdated = true;
      state.errorUserProfileUpdated = {};
      return { ...state };
    default:
      return state;
  }
};

export default profileReducer;

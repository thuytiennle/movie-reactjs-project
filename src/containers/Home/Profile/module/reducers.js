import {
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILED,
} from './constants';

const initialState = {
  userProfile: {},
  loadingUserProfile: true,
  errorUserProfile: null,
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
      state.errorUserProfile = action.err;
      return { ...state };
    default:
      return state;
  }
};

export default profileReducer;

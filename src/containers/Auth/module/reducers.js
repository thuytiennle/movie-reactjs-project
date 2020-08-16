import {
  FETCH_SIGN_UP_REQUEST,
  FETCH_SIGN_UP_SUCCESS,
  FETCH_SIGN_UP_FAILED,
  FETCH_SIGN_IN_REQUEST,
  FETCH_SIGN_IN_SUCCESS,
  FETCH_SIGN_IN_FAILED,
  FETCH_SIGN_UP_USER_TYPE_REQUEST,
  FETCH_SIGN_UP_USER_TYPE_SUCCESS,
  FETCH_SIGN_UP_USER_TYPE_FAILED,
  FETCH_SIGN_OUT,
  FETCH_SIGN_IN_CHECK_AFTER_RELOAD,
} from './constants';
import { history } from '../../../utils/history';

const intialState = {
  infoUser: {},
  loadingInfoUser: Boolean(false),
  infoUserError: null,
  userType: {},
  loadingUserType: Boolean(false),
  userTypeError: null,
  infoUserSignIn: {},
  loadingInfoUserSignIn: Boolean(false),
  infoUserSignInrError: null,
  // At first user has not logged in yet
  isSignIn: Boolean(false),
};

const AuthReducer = (state = intialState, action) => {
  switch (action.type) {
    // Sign Up
    case FETCH_SIGN_UP_REQUEST:
      state.infoUser = {};
      state.loadingInfoUser = Boolean(true);
      state.infoUserError = null;
      return { ...state };
    case FETCH_SIGN_UP_SUCCESS:
      state.infoUser = action.user;
      state.loadingInfoUser = Boolean(false);
      state.infoUserError = null;
      return { ...state };
    case FETCH_SIGN_UP_FAILED:
      state.infoUser = {};
      state.loadingInfoUser = Boolean(true);
      state.infoUserError = action.err;
      return { ...state };
    // Sign In
    case FETCH_SIGN_IN_REQUEST:
      state.infoUserSignIn = {};
      state.loadingInfoUserSignIn = Boolean(true);
      state.infoUserSignInrError = null;
      return { ...state };
    case FETCH_SIGN_IN_SUCCESS:
      state.infoUserSignIn = action.signInUser;
      state.loadingInfoUserSignIn = Boolean(false);
      state.infoUserSignInrError = null;
      state.isSignIn = Boolean(true);
      return { ...state };
    case FETCH_SIGN_IN_FAILED:
      state.infoUserSignIn = {};
      state.loadingInfoUserSignIn = Boolean(false);
      state.infoUserSignInrError = null;
      return { ...state };
    case FETCH_SIGN_IN_CHECK_AFTER_RELOAD:
      state.isSignIn = Boolean(true);
      return { ...state };
    // SignOut
    case FETCH_SIGN_OUT: {
      // Remove userSignIn of localStorage
      localStorage.removeItem('UserSignIn');
      // Back to home page
      history.push('/');
      state.isSignIn = Boolean(false);
      return { ...state };
    }
    // User Type
    case FETCH_SIGN_UP_USER_TYPE_REQUEST:
      state.userType = {};
      state.loadingUserType = Boolean(true);
      state.userTypeError = null;
      return { ...state };
    case FETCH_SIGN_UP_USER_TYPE_SUCCESS:
      state.userType = action.userType;
      state.loadingUserType = Boolean(false);
      state.userTypeError = null;
      return { ...state };
    case FETCH_SIGN_UP_USER_TYPE_FAILED:
      state.userType = {};
      state.loadingUserType = Boolean(false);
      state.userTypeError = action.err;
      return { ...state };
    default:
      return state;
  }
};

export default AuthReducer;

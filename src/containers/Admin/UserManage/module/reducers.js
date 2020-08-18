import {
  FETCH_LIST_USER_REQUEST,
  FETCH_LIST_USER_SUCCESS,
  FETCH_LIST_USER_FAILED,
} from './constants';

const initialState = {
  listUser: [],
  loadingListUser: true,
  errorListUser: null,
};
const userManageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_USER_REQUEST:
      state.listUser = [];
      state.loadingListUser = true;
      state.errorListUser = null;
      return { ...state };
    case FETCH_LIST_USER_SUCCESS:
      state.listUser = action.listUser;
      state.loadingListUser = false;
      state.errorListUser = null;
      return { ...state };
    case FETCH_LIST_USER_FAILED:
      state.listUser = [];
      state.loadingListUser = false;
      state.errorListUser = action.error;
      return { ...state };
    default:
      return state;
  }
};

export default userManageReducer;

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

const initialState = {
  // List User
  listUser: [],
  loadingListUser: true,
  errorListUser: null,
  // Add USer
  addUser: {},
  loadingAddUser: true,
  errorAddUser: null,
  // Delete User
  deleteUser: '',
  loadingDeleteUser: true,
  errorDeleteUser: null,
  // Edit User
  updateUser: {},
  loadingUpdateUser: true,
  errorUpdateUser: null,
  // Edit dialog
  editUser: null,
  openEditDialog: false,
  // Search User
  searchUser: [],
  loadingSearchUser: true,
  errorSearchUser: null,
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
    // Add User
    case FETCH_ADD_USER_REQUEST:
      state.addUser = {};
      state.loadingAddUser = true;
      state.errorAddUser = null;
      return { ...state };
    case FETCH_ADD_USER_SUCCESS:
      state.addUser = action.user;
      state.loadingAddUser = false;
      state.errorAddUser = null;
      return { ...state };
    case FETCH_ADD_USER_FAILED:
      state.addUser = {};
      state.loadingAddUser = false;
      state.errorAddUser = action.error;
      return { ...state };
    // Delete User
    case FETCH_DELETE_USER_REQUEST:
      state.deleteUser = '';
      state.loadingDeleteUser = true;
      state.errorDeleteUser = null;
      return { ...state };
    case FETCH_DELETE_USER_SUCCESS:
      state.deleteUser = action.data;
      state.loadingDeleteUser = false;
      state.errorDeleteUser = null;
      return { ...state };
    case FETCH_DELETE_USER_FAILED:
      state.deleteUser = '';
      state.loadingDeleteUser = false;
      state.errorDeleteUser = action.error;
      return { ...state };
    // Edit and Update User
    case FETCH_UPDATE_USER_REQUEST:
      state.updateUser = {};
      state.loadingUpdateUser = true;
      state.errorUpdateUser = null;
      return { ...state };
    case FETCH_UPDATE_USER_SUCCESS:
      state.updateUser = action.data;
      state.loadingUpdateUser = false;
      state.errorUpdateUser = null;
      return { ...state };
    case FETCH_UPDATE_USER_FAILED:
      state.updateUser = {};
      state.loadingUpdateUser = false;
      state.errorUpdateUser = action.error;
      return { ...state };
    // Edit dialog
    case OPEN_EDIT_DIALOG:
      state.openEditDialog = true;
      state.editUser = action.editUser;
      return { ...state };
    case CLOSE_EDIT_DIALOG:
      state.openEditDialog = false;
      return { ...state };
    default:
      return state;
    // Search User
    case FETCH_SEARCH_USER_REQUEST:
      state.searchUser = [];
      state.loadingSearchUser = true;
      state.errorSearchUser = null;
      return { ...state };
    case FETCH_SEARCH_USER_SUCCESS:
      state.searchUser = action.data;
      state.loadingSearchUser = false;
      state.errorSearchUser = null;
      return { ...state };
    case FETCH_SEARCH_USER_FAILED:
      state.searchUser = [];
      state.loadingSearchUser = false;
      state.errorSearchUser = action.error;
      return { ...state };
  }
};

export default userManageReducer;

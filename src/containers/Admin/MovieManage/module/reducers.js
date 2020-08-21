import {
  FETCH_ADD_MOVIE_REQUEST,
  FETCH_ADD_MOVIE_SUCCESS,
  FETCH_ADD_MOVIE_FAILED,
  FETCH_DELETE_MOVIE_REQUEST,
  FETCH_DELETE_MOVIE_SUCCESS,
  FETCH_DELETE_MOVIE_FAILED,
  OPEN_MOVIE_DIALOG,
  CLOSE_MOVIE_DIALOG,
  FETCH_UPDATE_MOVIE_REQUEST,
  FETCH_UPDATE_MOVIE_SUCCESS,
  FETCH_UPDATE_MOVIE_FAILED,
  OPEN_SHOW_TIME_DIALOG,
  CLOSE_SHOW_TIME_DIALOG,
} from './constants';

const initialState = {
  addMovie: {},
  loadingAddMovie: true,
  errorAddMovie: null,
  // Delete movie
  deleteMovie: '',
  loadingDeleteMovie: true,
  errorDeleteMovie: null,
  // Edit movie
  editMovie: {},
  openDialog: false,
  upDateMovie: {},
  loadingupDateMovie: true,
  errorUpdateMovie: null,
  // ShowTime
  openShowTimeDialog: false,
};

const movieManageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADD_MOVIE_REQUEST:
      state.addMovie = {};
      state.loadingAddMovie = true;
      state.errorAddMovie = null;
      return { ...state };
    case FETCH_ADD_MOVIE_SUCCESS:
      state.addMovie = action.data;
      state.loadingAddMovie = false;
      state.errorAddMovie = null;
      return { ...state };
    case FETCH_ADD_MOVIE_FAILED:
      state.addMovie = {};
      state.loadingAddMovie = false;
      state.errorAddMovie = action.error;
      return { ...state };
    // Delete movie
    case FETCH_DELETE_MOVIE_REQUEST:
      state.deleteMovie = '';
      state.loadingDeleteMovie = true;
      state.errorDeleteMovie = null;
      return { ...state };
    case FETCH_DELETE_MOVIE_SUCCESS:
      state.deleteMovie = action.data;
      state.loadingDeleteMovie = false;
      state.errorDeleteMovie = null;
      return { ...state };
    case FETCH_DELETE_MOVIE_FAILED:
      state.deleteMovie = '';
      state.loadingDeleteMovie = false;
      state.errorDeleteMovie = action.error;
      return { ...state };
    // Update or edit movie
    case OPEN_MOVIE_DIALOG:
      state.editMovie = action.editMovie;
      state.openDialog = true;
      return { ...state };
    case CLOSE_MOVIE_DIALOG:
      state.openDialog = false;
      return { ...state };
    case FETCH_UPDATE_MOVIE_REQUEST:
      state.upDateMovie = {};
      state.loadingupDateMovie = true;
      state.errorUpdateMovie = null;
      return { ...state };
    case FETCH_UPDATE_MOVIE_SUCCESS:
      state.upDateMovie = action.data;
      state.loadingupDateMovie = false;
      state.errorUpdateMovie = null;
      return { ...state };
    case FETCH_UPDATE_MOVIE_FAILED:
      state.upDateMovie = {};
      state.loadingupDateMovie = false;
      state.errorUpdateMovie = action.error;
      return { ...state };
    // ShowTime
    case OPEN_SHOW_TIME_DIALOG:
      state.openShowTimeDialog = true;
      return { ...state };
    case CLOSE_SHOW_TIME_DIALOG:
      state.openShowTimeDialog = false;
      return { ...state };
    default:
      return state;
  }
};

export default movieManageReducer;

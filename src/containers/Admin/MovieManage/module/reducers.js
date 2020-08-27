import {
  CLOSE_MOVIE_DIALOG,
  CLOSE_SHOW_TIME_DIALOG,
  FETCH_ADD_MOVIE_FAILED,
  FETCH_ADD_MOVIE_REQUEST,
  FETCH_ADD_MOVIE_SUCCESS,
  FETCH_DELETE_MOVIE_FAILED,
  FETCH_DELETE_MOVIE_REQUEST,
  FETCH_DELETE_MOVIE_SUCCESS,
  FETCH_MOVIE_INFO_FAILED,
  FETCH_MOVIE_INFO_REQUEST,
  FETCH_MOVIE_INFO_SUCCESS,
  FETCH_UPDATE_MOVIE_FAILED,
  FETCH_UPDATE_MOVIE_REQUEST,
  FETCH_UPDATE_MOVIE_SUCCESS,
  OPEN_MOVIE_DIALOG,
  FETCH_CINEMA_BRANCH_REQUEST,
  FETCH_CINEMA_BRANCH_SUCCESS,
  FETCH_CINEMA_BRANCH_FAILED,
  FETCH_ADD_MOVIE_SHOWTIME_REQUEST,
  FETCH_ADD_MOVIE_SHOWTIME_SUCCESS,
  FETCH_ADD_MOVIE_SHOWTIME_FAILED,
  RESET_ADD_MOVIE,
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
  // MovieInfo
  movieInfo: {},
  loadingMovieInfo: true,
  errorMovieInfo: null,
  // Cinema Branch
  cinemaBranch: [],
  loadingCinemaBranch: true,
  errorCinemaBranch: null,
  // MovieShowTimeCreation
  movieShowTime: '',
  loadingMovieShowTime: true,
  errorMovieShowTime: null,
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
    case RESET_ADD_MOVIE:
      state.addMovie = {};
      state.loadingAddMovie = true;
      state.errorAddMovie = null;
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
    case CLOSE_SHOW_TIME_DIALOG:
      state.openShowTimeDialog = false;
      return { ...state };
    // Movie Info
    case FETCH_MOVIE_INFO_REQUEST:
      state.openShowTimeDialog = true;
      state.movieInfo = {};
      state.loadingMovieInfo = true;
      state.errorMovieInfo = null;
      return { ...state };
    case FETCH_MOVIE_INFO_SUCCESS:
      state.movieInfo = action.data;
      state.loadingMovieInfo = false;
      state.errorMovieInfo = null;
      return { ...state };
    case FETCH_MOVIE_INFO_FAILED:
      state.movieInfo = {};
      state.loadingMovieInfo = false;
      state.errorMovieInfo = action.error;
      return { ...state };
    // Cinema Branch Info
    case FETCH_CINEMA_BRANCH_REQUEST:
      state.cinemaBranch = [];
      state.loadingCinemaBranch = true;
      state.errorCinemaBranch = null;
      return { ...state };
    case FETCH_CINEMA_BRANCH_SUCCESS:
      state.cinemaBranch = action.data;
      state.loadingCinemaBranch = false;
      state.errorCinemaBranch = null;
      return { ...state };
    case FETCH_CINEMA_BRANCH_FAILED:
      state.cinemaBranch = [];
      state.loadingCinemaBranch = false;
      state.errorCinemaBranch = action.error;
      return { ...state };
    // ShowTime Creation
    case FETCH_ADD_MOVIE_SHOWTIME_REQUEST:
      state.movieShowTime = [];
      state.loadingMovieShowTime = true;
      state.errorMovieShowTime = null;
      return { ...state };
    case FETCH_ADD_MOVIE_SHOWTIME_SUCCESS:
      state.movieShowTime = action.data;
      state.loadingMovieShowTime = false;
      state.errorMovieShowTime = null;
      return { ...state };
    case FETCH_ADD_MOVIE_SHOWTIME_FAILED:
      state.movieShowTime = [];
      state.loadingMovieShowTime = false;
      state.errorMovieShowTime = action.error;
      return { ...state };
    default:
      return state;
  }
};

export default movieManageReducer;

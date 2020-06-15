import {
  FETCH_LIST_MOVIE_REQUEST,
  FETCH_LIST_MOVIE_SUCCESS,
  FETCH_LIST_MOVIE_FAILED,
} from './constants';

const initialState = {
  listMovie: [],
  loadingListMovie: false,
  listMovieError: null,
};

const listMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_MOVIE_REQUEST:
      state.listMovie = [];
      state.loadingListMovie = true;
      state.listMovieError = null;
      return { ...state };

    case FETCH_LIST_MOVIE_SUCCESS:
      state.listMovie = action.data;
      state.loadingListMovie = false;
      state.listMovieError = null;
      return { ...state };

    case FETCH_LIST_MOVIE_FAILED:
      state.listMovie = [];
      state.loadingListMovie = false;
      state.listMovieError = action.err;
      return { ...state };

    default:
      return state;
  }
};

export default listMovieReducer;

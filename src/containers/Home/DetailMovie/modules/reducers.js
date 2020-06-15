import {
  FECTH_DETAIL_MOVIE_REQUEST,
  FECTH_DETAIL_MOVIE_SUCCESS,
  FECTH_DETAIL_MOVIE_FAILED,
} from './constants';

const initialState = {
  detailMovie: {},
  loadingDetailMovie: false,
  errorDetailMovie: null,
};

export const detailMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FECTH_DETAIL_MOVIE_REQUEST:
      state.detailMovie = {};
      state.loadingDetailMovie = true;
      state.errorDetailMovie = null;
      return { ...state };
    case FECTH_DETAIL_MOVIE_SUCCESS:
      state.detailMovie = action.detailMovie;
      state.loadingDetailMovie = false;
      state.errorDetailMovie = null;
      return { ...state };
    case FECTH_DETAIL_MOVIE_FAILED:
      state.detailMovie = {};
      state.loadingDetailMovie = false;
      state.errorDetailMovie = action.err;
      return { ...state };
    default:
      return state;
  }
};

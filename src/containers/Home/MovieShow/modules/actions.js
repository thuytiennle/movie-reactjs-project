import {
  FETCH_LIST_MOVIE_SUCCESS,
  FETCH_LIST_MOVIE_FAILED,
  FETCH_LIST_MOVIE_REQUEST,
  MOVIE_MODAL_OPEN,
  MOVIE_MODAL_CLOSE,
} from './constants';

// Actions for Call List Movie API
export const actFetchListMovieRequest = () => {
  return {
    type: FETCH_LIST_MOVIE_REQUEST,
  };
};

export const actFetchListMovieSuccess = (listMovie) => {
  return {
    type: FETCH_LIST_MOVIE_SUCCESS,
    data: listMovie,
  };
};

export const actFetchListMovieFailed = (err) => {
  return {
    type: FETCH_LIST_MOVIE_FAILED,
    err,
  };
};
// End of Call List Movie API

// Actions for Movie Trailer Modal
export const actMovieModalOpen = (movieURL) => {
  return {
    type: MOVIE_MODAL_OPEN,
    movieURL,
  };
};

export const actMovieModalClose = () => {
  return {
    type: MOVIE_MODAL_CLOSE,
  };
};
// End of Movie Trailer Modal actions

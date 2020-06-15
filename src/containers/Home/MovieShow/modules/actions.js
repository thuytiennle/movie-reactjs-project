import {
  FETCH_LIST_MOVIE_SUCCESS,
  FETCH_LIST_MOVIE_FAILED,
  FETCH_LIST_MOVIE_REQUEST,
} from './constants';

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

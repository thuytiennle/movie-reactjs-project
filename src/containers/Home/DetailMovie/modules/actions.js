import {
  FECTH_DETAIL_MOVIE_REQUEST,
  FECTH_DETAIL_MOVIE_SUCCESS,
  FECTH_DETAIL_MOVIE_FAILED,
} from './constants';

// Get movieId to attach to API url
export const actFetchDetailMovieRequest = (id) => {
  return {
    type: FECTH_DETAIL_MOVIE_REQUEST,
    id,
  };
};

export const actFetchDetailMovieSuccess = (detailMovie) => {
  return {
    type: FECTH_DETAIL_MOVIE_SUCCESS,
    detailMovie,
  };
};

export const actFetchDetailMovieFailed = (err) => {
  return {
    type: FECTH_DETAIL_MOVIE_FAILED,
    err,
  };
};

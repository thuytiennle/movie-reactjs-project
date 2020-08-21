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

export const actFetchAddMovieRequest = (movie) => {
  return {
    type: FETCH_ADD_MOVIE_REQUEST,
    movie,
  };
};

export const actFetchAddMovieSuccess = (data) => {
  return {
    type: FETCH_ADD_MOVIE_SUCCESS,
    data,
  };
};

export const actFetchAddMovieFailed = (error) => {
  return {
    type: FETCH_ADD_MOVIE_FAILED,
    error,
  };
};

// Delete movie
export const actFetchDeleteMovieRequest = (deleteMovieId) => {
  return {
    type: FETCH_DELETE_MOVIE_REQUEST,
    deleteMovieId,
  };
};

export const actFetchDeleteMovieSuccess = (data) => {
  return {
    type: FETCH_DELETE_MOVIE_SUCCESS,
    data,
  };
};

export const actFetchDeleteMovieFailed = (error) => {
  return {
    type: FETCH_DELETE_MOVIE_FAILED,
    error,
  };
};

// Edit movie
export const actOpenMovieDialog = (editMovie) => {
  return {
    type: OPEN_MOVIE_DIALOG,
    editMovie,
  };
};
export const actCloseMovieDialog = () => {
  return {
    type: CLOSE_MOVIE_DIALOG,
  };
};

export const actFetchUpdateMovieRequest = (updateMovie) => {
  return {
    type: FETCH_UPDATE_MOVIE_REQUEST,
    updateMovie,
  };
};

export const actFetchUpdateMovieSuccess = (data) => {
  return {
    type: FETCH_UPDATE_MOVIE_SUCCESS,
    data,
  };
};

export const actFetchUpdateMovieFailed = (error) => {
  return {
    type: FETCH_UPDATE_MOVIE_FAILED,
    error,
  };
};

// Show Time Selection
export const actOpenShowTimeDialog = () => {
  return {
    type: OPEN_SHOW_TIME_DIALOG,
  };
};

export const actCloseShowTimeDialog = () => {
  return {
    type: CLOSE_SHOW_TIME_DIALOG,
  };
};

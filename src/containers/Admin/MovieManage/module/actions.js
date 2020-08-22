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
export const actCloseShowTimeDialog = () => {
  return {
    type: CLOSE_SHOW_TIME_DIALOG,
  };
};

// Movie info
export const actFetchMovieInfoRequest = (movieId) => {
  return {
    type: FETCH_MOVIE_INFO_REQUEST,
    movieId,
  };
};

export const actFetchMovieInfoSuccess = (data) => {
  return {
    type: FETCH_MOVIE_INFO_SUCCESS,
    data,
  };
};

export const actFetchMovieInfoFailed = (error) => {
  return {
    type: FETCH_MOVIE_INFO_FAILED,
    error,
  };
};

// CinemaInfo
export const actFetchCiemaBranchInfoRequest = (cinemaId) => {
  return {
    type: FETCH_CINEMA_BRANCH_REQUEST,
    cinemaId,
  };
};

export const actFetchCiemaBranchInfoSuccess = (data) => {
  return {
    type: FETCH_CINEMA_BRANCH_SUCCESS,
    data,
  };
};

export const actFetchCiemaBranchInfoFailed = (error) => {
  return {
    type: FETCH_CINEMA_BRANCH_FAILED,
    error,
  };
};

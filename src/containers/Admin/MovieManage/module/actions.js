import {
  CLOSE_MOVIE_DIALOG,
  CLOSE_SHOW_TIME_DIALOG,
  FETCH_ADD_MOVIE_FAILED,
  FETCH_ADD_MOVIE_REQUEST,
  FETCH_ADD_MOVIE_SUCCESS,
  RESET_ADD_MOVIE,
  FETCH_DELETE_MOVIE_FAILED,
  FETCH_DELETE_MOVIE_REQUEST,
  FETCH_DELETE_MOVIE_SUCCESS,
  RESET_DELETE_MOVIE,
  FETCH_MOVIE_INFO_FAILED,
  FETCH_MOVIE_INFO_REQUEST,
  FETCH_MOVIE_INFO_SUCCESS,
  FETCH_UPDATE_MOVIE_FAILED,
  FETCH_UPDATE_MOVIE_REQUEST,
  FETCH_UPDATE_MOVIE_SUCCESS,
  RESET_UPDATE_MOVIE,
  OPEN_MOVIE_DIALOG,
  FETCH_CINEMA_BRANCH_REQUEST,
  FETCH_CINEMA_BRANCH_SUCCESS,
  FETCH_CINEMA_BRANCH_FAILED,
  FETCH_ADD_MOVIE_SHOWTIME_REQUEST,
  FETCH_ADD_MOVIE_SHOWTIME_SUCCESS,
  FETCH_ADD_MOVIE_SHOWTIME_FAILED,
  RESET_ADD_MOVIE_SHOWTIME,
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

export const actResetAddMovie = () => {
  return {
    type: RESET_ADD_MOVIE,
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

export const actResetDeleteMovie = () => {
  return { type: RESET_DELETE_MOVIE };
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

export const actResetUpdateMovie = () => {
  return {
    type: RESET_UPDATE_MOVIE,
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

// ShowTimeCreation
export const actFetchAddMovieShowTimeRequest = (movieShowTime) => {
  return {
    type: FETCH_ADD_MOVIE_SHOWTIME_REQUEST,
    movieShowTime,
  };
};

export const actFetchAddMovieShowTimeSuccess = (data) => {
  return {
    type: FETCH_ADD_MOVIE_SHOWTIME_SUCCESS,
    data,
  };
};

export const actFetchAddMovieShowTimeFailed = (error) => {
  return {
    type: FETCH_ADD_MOVIE_SHOWTIME_FAILED,
    error,
  };
};

export const actResetAddShowTime = (error) => {
  return {
    type: RESET_ADD_MOVIE_SHOWTIME,
    error,
  };
};

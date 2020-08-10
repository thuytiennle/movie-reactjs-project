import {
  FECTH_CINEMA_SHOWTIME_REQUEST,
  FECTH_CINEMA_SHOWTIME_SUCCESS,
  FECTH_CINEMA_SHOWTIME_FAILED,
} from './constants';

// Get movieId to attach to API url
export const actFetchCinemaShowTimeRequest = (id) => {
  return {
    type: FECTH_CINEMA_SHOWTIME_REQUEST,
    id,
  };
};

export const actFetchCinemaShowTimeSuccess = (cinemaShowTime) => {
  return {
    type: FECTH_CINEMA_SHOWTIME_SUCCESS,
    cinemaShowTime,
  };
};

export const actFetchCinemaShowTimeFailed = (err) => {
  return {
    type: FECTH_CINEMA_SHOWTIME_FAILED,
    err,
  };
};

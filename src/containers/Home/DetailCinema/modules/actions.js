import {
  FETCH_DETAIL_CINEMA_REQUEST,
  FETCH_DETAIL_CINEMA_SUCCESS,
  FETCH_DETAIL_CINEMA_FAILED,
} from './constants';

export const actFetchDetailCinemaRequest = (cinemaId) => {
  return {
    type: FETCH_DETAIL_CINEMA_REQUEST,
    cinemaId,
  };
};

export const actFetchDetailCinemaSuccess = (detailCinema) => {
  return {
    type: FETCH_DETAIL_CINEMA_SUCCESS,
    detailCinema,
  };
};

export const actFetchDetailCinemaFailed = (err) => {
  return {
    type: FETCH_DETAIL_CINEMA_FAILED,
    err,
  };
};

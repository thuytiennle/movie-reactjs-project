import {
  FETCH_DETAIL_CINEMA_REQUEST,
  FETCH_DETAIL_CINEMA_SUCCESS,
  FETCH_DETAIL_CINEMA_FAILED,
  ADD_COMMENT,
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

export const actAddCinemaComment = (comment) => {
  return {
    type: ADD_COMMENT,
    comment,
  };
};

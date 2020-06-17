import {
  FETCH_CINEMA_COMPLEX_REQUEST,
  FETCH_CINEMA_COMPLEX_SUCCESS,
  FETCH_CINEMA_COMPLEX_FAILED,
  FETCH_CINEMA_BRANCH_REQUEST,
  FETCH_CINEMA_BRANCH_SUCCESS,
  FETCH_CINEMA_BRANCH_FAILED,
} from './constants';

export const actFetchCinemaComplexRequest = () => {
  return {
    type: FETCH_CINEMA_COMPLEX_REQUEST,
  };
};

export const actFetchCinemaComplexSuccess = (cinemaComplex) => {
  return {
    type: FETCH_CINEMA_COMPLEX_SUCCESS,
    cinemaComplex,
  };
};

export const actFetchCinemaComplexFailed = (err) => {
  return {
    type: FETCH_CINEMA_COMPLEX_FAILED,
    err,
  };
};

export const actFetchCinemaBranchRequest = () => {
  return {
    type: FETCH_CINEMA_BRANCH_REQUEST,
  };
};

export const actFetchCinemaBranchSuccess = (cinemaBranch) => {
  return {
    type: FETCH_CINEMA_BRANCH_SUCCESS,
    cinemaBranch,
  };
};

export const actFetchCinemaBranchFailed = (err) => {
  return {
    type: FETCH_CINEMA_BRANCH_FAILED,
    err,
  };
};

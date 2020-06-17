import {
  FETCH_CINEMA_COMPLEX_REQUEST,
  FETCH_CINEMA_COMPLEX_SUCCESS,
  FETCH_CINEMA_COMPLEX_FAILED,
  FETCH_CINEMA_BRANCH_REQUEST,
  FETCH_CINEMA_BRANCH_SUCCESS,
  FETCH_CINEMA_BRANCH_FAILED,
} from './constants';

const initialState = {
  cinemaComplex: [],
  loadingCinemaComplex: false,
  errorCinemaComplex: null,
  cinemaBranch: [],
  loadingCinemaBranch: false,
  errorCinemaBranch: null,
};

const cinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CINEMA_COMPLEX_REQUEST:
      state.cinemaComplex = [];
      state.loadingCinemaComplex = true;
      state.errorCinemaComplex = null;
      return { ...state };
    case FETCH_CINEMA_COMPLEX_SUCCESS:
      state.cinemaComplex = action.cinemaComplex;
      state.loadingCinemaComplex = false;
      state.errorCinemaComplex = null;
      return { ...state };
    case FETCH_CINEMA_COMPLEX_FAILED:
      state.cinemaComplex = [];
      state.loadingCinemaComplex = false;
      state.errorCinemaComplex = action.err;
      return { ...state };
    case FETCH_CINEMA_BRANCH_REQUEST:
      // As we get cinemaBranches and movie list for many cinemaComplexes. Each time we just request only one data package for a single complex then we need to copy data into new array and add new data for each request.
      // Copy available branches of cinema in array
      state.cinemaBranch = [...state.cinemaBranch];
      state.loadingCinemaBranch = true;
      state.errorCinemaBranch = null;
      return { ...state };
    case FETCH_CINEMA_BRANCH_SUCCESS:
      // Add new cinema branches array into cinemaBranch array
      state.cinemaBranch = [...state.cinemaBranch, ...action.cinemaBranch];
      state.loadingCinemaBranch = false;
      state.errorCinemaBranch = null;
      return { ...state };
    case FETCH_CINEMA_BRANCH_FAILED:
      // Copy available branches of cinema in array
      state.cinemaBranch = [...state.cinemaBranch];
      state.loadingCinemaBranch = false;
      state.errorCinemaBranch = action.err;
      return { ...state };
    default:
      return state;
  }
};

export default cinemaReducer;

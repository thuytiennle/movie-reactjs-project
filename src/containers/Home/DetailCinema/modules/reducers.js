import {
  FETCH_DETAIL_CINEMA_REQUEST,
  FETCH_DETAIL_CINEMA_SUCCESS,
  FETCH_DETAIL_CINEMA_FAILED,
} from './constants';

const initialState = {
  detailCinema: [],
  loadingDetailCinema: false,
  errorDetailCinema: null,
};

const detailCinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAIL_CINEMA_REQUEST:
      state.detailCinema = [];
      state.loadingDetailCinema = true;
      state.errorDetailCinema = null;
      return { ...state };
    case FETCH_DETAIL_CINEMA_SUCCESS:
      state.detailCinema = action.detailCinema;
      state.loadingDetailCinema = false;
      state.errorDetailCinema = null;
      return { ...state };
    case FETCH_DETAIL_CINEMA_FAILED:
      state.detailCinema = [];
      state.loadingDetailCinema = false;
      state.errorDetailCinema = action.err;
      return { ...state };
    default:
      return state;
  }
};

export default detailCinemaReducer;

import {
  FECTH_CINEMA_SHOWTIME_REQUEST,
  FECTH_CINEMA_SHOWTIME_SUCCESS,
  FECTH_CINEMA_SHOWTIME_FAILED,
} from './constants';

const initialState = {
  cinemaShowTime: {},
  loadingCinemaShowTime: false,
  errorCinemaShowTime: null,
  listDate: [],
  listTime: [],
};

const cinemaShowTimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FECTH_CINEMA_SHOWTIME_REQUEST:
      state.cinemaShowTime = {};
      state.loadingCinemaShowTime = true;
      state.errorCinemaShowTime = null;
      return { ...state };
    case FECTH_CINEMA_SHOWTIME_SUCCESS:
      state.cinemaShowTime = action.cinemaShowTime;
      state.loadingCinemaShowTime = false;
      state.errorCinemaShowTime = null;
      return { ...state };
    case FECTH_CINEMA_SHOWTIME_FAILED:
      state.detailMovie = {};
      state.loadingDetailMovie = false;
      state.errorDetailMovie = action.err;
      return { ...state };
    default:
      return state;
  }
};

export default cinemaShowTimeReducer;

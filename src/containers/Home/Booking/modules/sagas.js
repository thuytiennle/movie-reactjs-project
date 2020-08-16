import { call, put, takeLatest } from 'redux-saga/effects';
import { callAPI } from '../../../../utils/callAPI';
import {
  actFetchCinemaShowTimeSuccess,
  actFetchCinemaShowTimeFailed,
} from './actions';
import { FECTH_CINEMA_SHOWTIME_REQUEST } from './constants';

// action param helps get movieId from action FECTH_DETAIL_MOVIE_REQUEST watched by saga
function* cinemaShowTimeSaga(action) {
  const { id } = action;
  try {
    // Call func uses for handling async functions as Axios, setTimeout with params 1 callback function
    const response = yield call(() =>
      callAPI(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`, 'GET', null),
    );
    // Construct Data
    const listCinema = response.data.heThongRapChieu.map((item) => {
      return item.cumRapChieu.map((cinema) => cinema);
    });
    const mergedlistCinemaClone = [].concat(...listCinema);

    // dispatch a success action to the store with the new dog
    yield put(actFetchCinemaShowTimeSuccess(mergedlistCinemaClone));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(actFetchCinemaShowTimeFailed(error));
  }
}

export default function* cinemaShowtimeWatcher() {
  yield takeLatest(FECTH_CINEMA_SHOWTIME_REQUEST, cinemaShowTimeSaga);
}

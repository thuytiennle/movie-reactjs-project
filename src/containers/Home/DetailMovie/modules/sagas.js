import { call, put, takeLatest } from 'redux-saga/effects';
import { callAPI } from '../../../../utils/callAPI';
import {
  actFetchDetailMovieSuccess,
  actFetchDetailMovieFailed,
} from './actions';
import { FECTH_DETAIL_MOVIE_REQUEST } from './constants';

// action param helps get movieId from action FECTH_DETAIL_MOVIE_REQUEST watched by saga
function* detailMovieSaga(action) {
  const { id } = action;
  try {
    // Call func uses for handling async functions as Axios, setTimeout with params 1 callback function
    const response = yield call(() =>
      callAPI(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`, 'GET', null),
    );

    // dispatch a success action to the store with the new dog
    yield put(actFetchDetailMovieSuccess(response.data));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(actFetchDetailMovieFailed(error));
  }
}

export default function* detailMoviewatcher() {
  yield takeLatest(FECTH_DETAIL_MOVIE_REQUEST, detailMovieSaga);
}

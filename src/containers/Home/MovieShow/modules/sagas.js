import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { callAPI } from '../../../../utils/callAPI';
import { actFetchListMovieSuccess, actFetchListMovieFailed } from './actions';
import { FETCH_LIST_MOVIE_REQUEST } from './constants';

function* listMovieSaga() {
  try {
    // Delay 1500 to display loader
    yield delay(1000);
    // Call func uses for handling async functions as Axios, setTimeout with params 1 callback function
    const response = yield call(() =>
      callAPI('QuanLyPhim/LayDanhSachPhim?maNhom=GP05', 'GET', null),
    );
    const { data } = response;

    // dispatch a success action to the store with the new dog
    yield put(actFetchListMovieSuccess(data));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(actFetchListMovieFailed(error));
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
// Saga will process when actFetchListMovieRequest is dispatched to store
export default function* listMovieWatcher() {
  yield takeLatest(FETCH_LIST_MOVIE_REQUEST, listMovieSaga);
}

import { call, put, takeLatest } from 'redux-saga/effects';
import { callAPI } from '../../../../utils/callAPI';
import { FETCH_DETAIL_CINEMA_REQUEST } from './constants';
import {
  actFetchDetailCinemaFailed,
  actFetchDetailCinemaSuccess,
} from './actions';

// Saga Worker: detailCinemaSaga
function* detailCinemaSaga({ cinemaId }) {
  try {
    const response = yield call(() =>
      callAPI(
        `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${cinemaId}&maNhom=GP05`,
        'GET',
        null,
      ),
    );

    const { data } = response;
    yield put(actFetchDetailCinemaSuccess(data));
  } catch (error) {
    yield put(actFetchDetailCinemaFailed(error));
  }
}

// Saga Watcher
export default function* detailCinemaWatcher() {
  yield takeLatest(FETCH_DETAIL_CINEMA_REQUEST, detailCinemaSaga);
}

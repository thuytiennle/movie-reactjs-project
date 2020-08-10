import { call, put, takeLatest } from 'redux-saga/effects';
import { callAPI } from '../../../../utils/callAPI';
import {
  actFetchCinemaComplexFailed,
  actFetchCinemaComplexSuccess,
  actFetchCinemaBranchSuccess,
  actFetchCinemaBranchFailed,
} from './actions';
import {
  FETCH_CINEMA_COMPLEX_REQUEST,
  FETCH_CINEMA_BRANCH_REQUEST,
} from './constants';

function* cinemaSaga() {
  try {
    // Call cinema  complex API
    const response = yield call(() =>
      callAPI('QuanLyRap/LayThongTinHeThongRap', 'GET', null),
    );
    const { data } = response;
    // Dispatch cinema complex API success action
    yield put(actFetchCinemaComplexSuccess(data));
  } catch (error) {
    // Dispatch cinema complex API failed action
    yield put(actFetchCinemaComplexFailed(error));
  }
}

// After get cinemaComplex API then we'll get cinema branches and movie showtimes based on cinemaconplexid
function* cinemaBranchSaga({ cinemaComplexId }) {
  try {
    // Call cinema branch API
    const response = yield call(() =>
      callAPI(
        `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${cinemaComplexId}&maNhom=GP05`,
        'GET',
        null,
      ),
    );
    const { data } = response;
    // Dispatch cinema branch API success action
    yield put(actFetchCinemaBranchSuccess(data));
  } catch (error) {
    // Dispatch cinema branch API fail action
    yield put(actFetchCinemaBranchFailed(error));
  }
}

// Watch action FETCH_CINEMA_COMPLEX_REQUEST dispatched then cinemaSaga
function* cinemaWatcher() {
  yield takeLatest(FETCH_CINEMA_COMPLEX_REQUEST, cinemaSaga);
  yield takeLatest(FETCH_CINEMA_BRANCH_REQUEST, cinemaBranchSaga);
}

export default cinemaWatcher;

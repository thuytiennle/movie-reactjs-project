import { call, put, takeLatest } from 'redux-saga/effects';
import { authHeader } from '../../../../utils/auth-header';
import { callAPI } from '../../../../utils/callAPI';
import { actFetchListMovieRequest } from '../../../Home/MovieShow/modules/actions';
import {
  actFetchAddMovieFailed,
  actFetchAddMovieSuccess,
  actFetchDeleteMovieFailed,
  actFetchDeleteMovieSuccess,
  actFetchMovieInfoFailed,
  actFetchMovieInfoSuccess,
  actFetchUpdateMovieFailed,
  actFetchUpdateMovieSuccess,
  actFetchCiemaBranchInfoSuccess,
  actFetchCiemaBranchInfoFailed,
} from './actions';
import {
  FETCH_ADD_MOVIE_REQUEST,
  FETCH_DELETE_MOVIE_REQUEST,
  FETCH_MOVIE_INFO_REQUEST,
  FETCH_UPDATE_MOVIE_REQUEST,
  FETCH_CINEMA_BRANCH_REQUEST,
} from './constants';

function* addMovieSaga({ movie }) {
  try {
    const response = yield call(() =>
      callAPI(`QuanLyPhim/ThemPhimUploadHinh`, 'POST', movie),
    );
    yield put(actFetchAddMovieSuccess(response.data));
    // Load list User
    // yield put(actFetchListUserRequest());
  } catch (error) {
    yield put(actFetchAddMovieFailed(error));
  }
}

function* deleteMovieSaga({ deleteMovieId }) {
  try {
    const params = { headers: authHeader(), credentials: 'same-origin' };
    const response = yield call(() =>
      callAPI(
        `QuanLyPhim/XoaPhim?MaPhim=${deleteMovieId}`,
        'DELETE',
        null,
        params,
      ),
    );
    yield put(actFetchDeleteMovieSuccess(response.data));
    // Load list Movie
    yield put(actFetchListMovieRequest());
  } catch (error) {
    yield put(actFetchDeleteMovieFailed(error));
    yield put(actFetchListMovieRequest());
  }
}

function* upDateMovieSaga({ updateUser }) {
  try {
    const params = { headers: authHeader() };
    const response = yield call(() =>
      callAPI('QuanLyPhim/CapNhatPhimUpload', 'POST', updateUser, params),
    );
    yield put(actFetchUpdateMovieSuccess(response.data));
    // Load list Movie
    yield put(actFetchListMovieRequest());
  } catch (error) {
    yield put(actFetchUpdateMovieFailed(error));
    // yield put(actFetchListMovieRequest());
  }
}

function* movieInfoSaga({ movieId }) {
  try {
    const response = yield call(() =>
      callAPI(`QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`, 'GET', null),
    );
    yield put(actFetchMovieInfoSuccess(response.data));
  } catch (error) {
    yield put(actFetchMovieInfoFailed(error));
  }
}

function* cinemaBranchInfoSaga({ cinemaId }) {
  try {
    const response = yield call(() =>
      callAPI(
        `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${cinemaId}`,
        'GET',
        null,
      ),
    );
    yield put(actFetchCiemaBranchInfoSuccess(response.data));
  } catch (error) {
    yield put(actFetchCiemaBranchInfoFailed(error));
  }
}

export default function* movieManageSaga() {
  yield takeLatest(FETCH_ADD_MOVIE_REQUEST, addMovieSaga);
  yield takeLatest(FETCH_DELETE_MOVIE_REQUEST, deleteMovieSaga);
  yield takeLatest(FETCH_UPDATE_MOVIE_REQUEST, upDateMovieSaga);
  yield takeLatest(FETCH_MOVIE_INFO_REQUEST, movieInfoSaga);
  yield takeLatest(FETCH_CINEMA_BRANCH_REQUEST, cinemaBranchInfoSaga);
}

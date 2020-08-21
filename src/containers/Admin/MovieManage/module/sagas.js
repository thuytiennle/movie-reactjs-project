import { call, put, takeLatest } from 'redux-saga/effects';
import { callAPI } from '../../../../utils/callAPI';
import {
  actFetchAddMovieSuccess,
  actFetchAddMovieFailed,
  actFetchDeleteMovieSuccess,
  actFetchDeleteMovieFailed,
  actFetchUpdateMovieSuccess,
  actFetchUpdateMovieFailed,
} from './actions';
import {
  FETCH_ADD_MOVIE_REQUEST,
  FETCH_DELETE_MOVIE_REQUEST,
  FETCH_UPDATE_MOVIE_REQUEST,
} from './constants';
import { authHeader } from '../../../../utils/auth-header';
import { actFetchListMovieRequest } from '../../../Home/MovieShow/modules/actions';
import { FETCH_UPDATE_USER_REQUEST } from '../../UserManage/module/constants';

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
    console.log(params);
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

export default function* movieManageSaga() {
  yield takeLatest(FETCH_ADD_MOVIE_REQUEST, addMovieSaga);
  yield takeLatest(FETCH_DELETE_MOVIE_REQUEST, deleteMovieSaga);
  yield takeLatest(FETCH_UPDATE_MOVIE_REQUEST, upDateMovieSaga);
}

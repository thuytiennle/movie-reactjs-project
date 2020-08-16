import { call, put, takeLatest } from 'redux-saga/effects';
import { callAPI } from '../../../utils/callAPI';
import {
  actFetchSignInFailed,
  actFetchSignInSuccess,
  actFetchSignUpFailed,
  actFetchSignUpSuccess,
  actFetchSignUpUserTypeFailed,
  actFetchSignUpUserTypeSuccess,
} from './actions';
import {
  FETCH_SIGN_IN_REQUEST,
  FETCH_SIGN_UP_REQUEST,
  FETCH_SIGN_UP_USER_TYPE_REQUEST,
} from './constants';

function* signUpSaga({ user }) {
  try {
    const response = yield call(() =>
      callAPI('QuanLyNguoiDung/DangKy', 'POST', { ...user, maNhom: 'GP05' }),
    );
    yield put(actFetchSignUpSuccess(response.data));
  } catch (error) {
    yield put(actFetchSignUpFailed(error));
  }
}

function* SignInSaga({ user, history, from }) {
  try {
    const response = yield call(() =>
      callAPI('QuanLyNguoiDung/DangNhap', 'POST', user),
    );
    yield put(actFetchSignInSuccess(response.data));
    // Login succeed  then save infoUser to localStorage
    localStorage.setItem('UserSignIn', JSON.stringify(response.data));
    // Move to previous page
    history.replace(from);
  } catch (error) {
    yield put(actFetchSignInFailed(error));
  }
}

function* getUserRoleSaga() {
  try {
    const response = yield call(() =>
      callAPI('QuanLyNguoiDung/LayDanhSachLoaiNguoiDung', 'GET', null),
    );
    yield put(actFetchSignUpUserTypeSuccess(response.data));
  } catch (error) {
    yield put(actFetchSignUpUserTypeFailed(error));
  }
}

export default function* AuthWatcher() {
  yield takeLatest(FETCH_SIGN_UP_REQUEST, signUpSaga);
  yield takeLatest(FETCH_SIGN_IN_REQUEST, SignInSaga);
  yield takeLatest(FETCH_SIGN_UP_USER_TYPE_REQUEST, getUserRoleSaga);
}

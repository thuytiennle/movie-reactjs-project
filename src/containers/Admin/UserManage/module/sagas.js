import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { authHeader } from '../../../../utils/auth-header';
import { callAPI } from '../../../../utils/callAPI';
import {
  actFetchAddUserFailed,
  actFetchAddUserSuccess,
  actFetchDeleteUserFailed,
  actFetchDeleteUserSuccess,
  actFetchListUserFailed,
  actFetchListUserSuccess,
  actFetchSearchUserFailed,
  actFetchSearchUserSuccess,
  actFetchUpdateUserFailed,
  actFetchUpdateUserSuccess,
} from './actions';
import {
  FETCH_ADD_USER_REQUEST,
  FETCH_DELETE_USER_REQUEST,
  FETCH_LIST_USER_REQUEST,
  FETCH_SEARCH_USER_REQUEST,
  FETCH_UPDATE_USER_REQUEST,
} from './constants';

function* listUserSaga() {
  try {
    yield delay(1000);
    const response = yield call(() =>
      callAPI('QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP05', 'GET', null),
    );
    yield put(actFetchListUserSuccess(response.data));
  } catch (error) {
    yield put(actFetchListUserFailed(error));
  }
}

function* addUserSaga({ addUser }) {
  try {
    const params = { headers: authHeader() };
    const response = yield call(() =>
      callAPI(`QuanLyNguoiDung/ThemNguoiDung`, 'POST', addUser, params),
    );
    yield put(actFetchAddUserSuccess(response.data));
    // Load list User
    // yield put(actFetchListUserRequest());
  } catch (error) {
    yield put(actFetchAddUserFailed(error));
  }
}

function* deleteUserSaga({ deleteAccount }) {
  try {
    const params = { headers: authHeader() };
    const response = yield call(() =>
      callAPI(
        `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${deleteAccount}`,
        'DELETE',
        null,
        params,
      ),
    );
    yield put(actFetchDeleteUserSuccess(response.data));
    // Load list User
    // yield put(actFetchListUserRequest());
    // yield put(actFetchSearchUserRequest(''));
  } catch (error) {
    yield put(actFetchDeleteUserFailed(error));
  }
}

function* updateUserSaga({ updateUser }) {
  try {
    const params = { headers: authHeader() };
    const response = yield call(() =>
      callAPI(
        `QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
        'PUT',
        updateUser,
        params,
      ),
    );
    yield put(actFetchUpdateUserSuccess(response.data));
    // Load list User
    // yield put(actFetchListUserRequest());
    // yield put(actFetchSearchUserRequest(''));
  } catch (error) {
    yield put(actFetchUpdateUserFailed(error));
  }
}

function* searchUserSaga({ keyword }) {
  try {
    const response = yield call(() =>
      callAPI(
        keyword
          ? `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP05&tuKhoa=${keyword}`
          : `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP05`,
        'GET',
        null,
      ),
    );
    yield put(actFetchSearchUserSuccess(response.data));
  } catch (error) {
    yield put(actFetchSearchUserFailed(error));
  }
}

export default function* userManageWatcher() {
  yield takeLatest(FETCH_LIST_USER_REQUEST, listUserSaga);
  yield takeLatest(FETCH_ADD_USER_REQUEST, addUserSaga);
  yield takeLatest(FETCH_DELETE_USER_REQUEST, deleteUserSaga);
  yield takeLatest(FETCH_UPDATE_USER_REQUEST, updateUserSaga);
  yield takeLatest(FETCH_SEARCH_USER_REQUEST, searchUserSaga);
}

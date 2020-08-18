import { call, put, takeLatest } from 'redux-saga/effects';
import { callAPI } from '../../../../utils/callAPI';
import { actFetchListUserFailed, actFetchListUserSuccess } from './actions';
import { FETCH_LIST_USER_REQUEST } from './constants';

function* listUserSaga() {
  try {
    const response = yield call(() =>
      callAPI('QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP05', 'GET', null),
    );
    yield put(actFetchListUserSuccess(response.data));
  } catch (error) {
    yield put(actFetchListUserFailed(error));
  }
}

export default function* userManageWatcher() {
  yield takeLatest(FETCH_LIST_USER_REQUEST, listUserSaga);
}

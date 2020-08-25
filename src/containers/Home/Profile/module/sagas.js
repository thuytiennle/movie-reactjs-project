import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { callAPI } from '../../../../utils/callAPI';
import {
  actFetchUserProfileFailed,
  actFetchUserProfileSuccess,
  actFetchUserProfileUpdateSuccess,
  actFetchUserProfileUpdateFailed,
} from './actions';
import {
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_UPDATE_REQUEST,
} from './constants';
import { authHeader } from '../../../../utils/auth-header';

function* userProfileSaga({ account }) {
  try {
    // Wait 2500s to show loading
    yield delay(2500);
    const response = yield call(() =>
      callAPI('QuanLyNguoiDung/ThongTinTaiKhoan', 'POST', account),
    );
    yield put(actFetchUserProfileSuccess(response.data));
  } catch (error) {
    yield put(actFetchUserProfileFailed(error));
  }
}

function* userProfileUpdateSaga({ updateUserInfo }) {
  try {
    const params = { headers: authHeader() };
    const response = yield call(() =>
      callAPI(
        'QuanLyNguoiDung/CapNhatThongTinNguoiDung',
        'PUT',
        updateUserInfo,
        params,
      ),
    );
    yield put(actFetchUserProfileUpdateSuccess(response.data));
  } catch (error) {
    yield put(actFetchUserProfileUpdateFailed(error));
  }
}

export default function* userProfileWatcher() {
  yield takeLatest(FETCH_USER_PROFILE_REQUEST, userProfileSaga);
  yield takeLatest(FETCH_USER_PROFILE_UPDATE_REQUEST, userProfileUpdateSaga);
}

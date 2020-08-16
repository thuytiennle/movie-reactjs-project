import { call, put, takeLatest } from 'redux-saga/effects';
import { callAPI } from '../../../../utils/callAPI';
import {
  actFetchUserProfileFailed,
  actFetchUserProfileSuccess,
} from './actions';
import { FETCH_USER_PROFILE_REQUEST } from './constants';

function* userProfileSaga({ account }) {
  try {
    const response = yield call(() =>
      callAPI('QuanLyNguoiDung/ThongTinTaiKhoan', 'POST', account),
    );
    console.log(response);
    yield put(actFetchUserProfileSuccess(response.data));
  } catch (error) {
    yield put(actFetchUserProfileFailed(error));
  }
}

export default function* userProfileWatcher() {
  yield takeLatest(FETCH_USER_PROFILE_REQUEST, userProfileSaga);
}

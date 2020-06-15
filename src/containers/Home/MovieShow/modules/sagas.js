import { call, put, takeLatest } from 'redux-saga/effects';
import { callAPI } from '../../../../utils/callAPI';
import { actFetchListMovieSuccess, actFetchListMovieFailed } from './actions';
import { FETCH_LIST_MOVIE_REQUEST } from './constants';

function* listMovieSaga() {
  try {
    // Call dùng để gọi các bất đồng bộ như Axios. Tham số truyền vào là 1 function
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
// Sẽ thực hiện saga khi function actFetchListMovieRequest đc dispatch lên store
export default function* listMovieWatcher() {
  yield takeLatest(FETCH_LIST_MOVIE_REQUEST, listMovieSaga);
}

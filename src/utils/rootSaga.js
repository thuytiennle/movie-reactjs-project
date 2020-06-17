import { all } from 'redux-saga/effects';
import listMovieSaga from '../containers/Home/MovieShow/modules/sagas';
import detailMoviewatcher from '../containers/Home/DetailMovie/modules/sagas';
import cinemaWatcher from '../containers/Home/Cinema/modules/sagas';

function* rootSaga() {
  yield all([listMovieSaga(), detailMoviewatcher(), cinemaWatcher()]);
}
export default rootSaga;

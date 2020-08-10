import { all } from 'redux-saga/effects';
import listMovieSaga from '../containers/Home/MovieShow/modules/sagas';
import detailMoviewatcher from '../containers/Home/DetailMovie/modules/sagas';
import cinemaWatcher from '../containers/Home/Cinema/modules/sagas';
import detailCinemaWatcher from '../containers/Home/DetailCinema/modules/sagas';
import cinemaShowTimeWatcher from '../containers/Home/Booking/modules/sagas';

function* rootSaga() {
  yield all([
    listMovieSaga(),
    detailMoviewatcher(),
    cinemaWatcher(),
    detailCinemaWatcher(),
    cinemaShowTimeWatcher(),
  ]);
}
export default rootSaga;

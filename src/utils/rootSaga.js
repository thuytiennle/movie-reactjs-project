import { all } from 'redux-saga/effects';
import listMovieSaga from '../containers/Home/MovieShow/modules/sagas';
import detailMoviewatcher from '../containers/Home/DetailMovie/modules/sagas';
import cinemaWatcher from '../containers/Home/Cinema/modules/sagas';
import detailCinemaWatcher from '../containers/Home/DetailCinema/modules/sagas';
import cinemaShowTimeWatcher from '../containers/Home/Booking/modules/sagas';
import cinemaBookingRoomWatcher from '../containers/Home/CinemaBookingRoom/modules/sagas';
import AuthWatcher from '../containers/Auth/module/sagas';
import userProfileWatcher from '../containers/Home/Profile/module/sagas';

function* rootSaga() {
  yield all([
    listMovieSaga(),
    detailMoviewatcher(),
    cinemaWatcher(),
    detailCinemaWatcher(),
    cinemaShowTimeWatcher(),
    cinemaBookingRoomWatcher(),
    AuthWatcher(),
    userProfileWatcher(),
  ]);
}
export default rootSaga;

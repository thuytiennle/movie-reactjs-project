import { combineReducers } from 'redux';
import listMovieReducer from '../containers/Home/MovieShow/modules/reducers';
import detailMovieReducer from '../containers/Home/DetailMovie/modules/reducers';
import cinemaReducer from '../containers/Home/Cinema/modules/reducers';
import detailCinemaReducer from '../containers/Home/DetailCinema/modules/reducers';
import cinemaShowTimeReducer from '../containers/Home/Booking/modules/reducers';
import cinemaBookingRoomReducer from '../containers/Home/CinemaBookingRoom/modules/reducers';
import AuthReducer from '../containers/Auth/module/reducers';
import profileReducer from '../containers/Home/Profile/module/reducers';

const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer,
  cinemaReducer,
  detailCinemaReducer,
  cinemaShowTimeReducer,
  cinemaBookingRoomReducer,
  AuthReducer,
  profileReducer,
});

export default rootReducer;

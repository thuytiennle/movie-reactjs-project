import { combineReducers } from 'redux';
import listMovieReducer from '../containers/Home/MovieShow/modules/reducers';
import detailMovieReducer from '../containers/Home/DetailMovie/modules/reducers';
import cinemaReducer from '../containers/Home/Cinema/modules/reducers';
import detailCinemaReducer from '../containers/Home/DetailCinema/modules/reducers';

const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer,
  cinemaReducer,
  detailCinemaReducer,
});

export default rootReducer;

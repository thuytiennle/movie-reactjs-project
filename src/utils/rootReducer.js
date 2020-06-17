import { combineReducers } from 'redux';
import listMovieReducer from '../containers/Home/MovieShow/modules/reducers';
import detailMovieReducer from '../containers/Home/DetailMovie/modules/reducers';
import cinemaReducer from '../containers/Home/Cinema/modules/reducers';

const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer,
  cinemaReducer,
});

export default rootReducer;

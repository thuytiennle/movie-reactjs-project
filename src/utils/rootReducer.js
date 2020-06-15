import { combineReducers } from 'redux';
import listMovieReducer from '../containers/Home/MovieShow/modules/reducers';

const rootReducer = combineReducers({
  listMovieReducer,
});

export default rootReducer;

import { all } from 'redux-saga/effects';
import listMovieSaga from '../containers/Home/MovieShow/modules/sagas';

function* rootSaga() {
  yield all([listMovieSaga()]);
}
export default rootSaga;

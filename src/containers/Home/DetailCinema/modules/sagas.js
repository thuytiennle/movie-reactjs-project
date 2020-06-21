import { call, put, takeLatest } from 'redux-saga/effects';
import { callAPI } from '../../../../utils/callAPI';
import { FETCH_DETAIL_CINEMA_REQUEST } from './constants';
import { actFetchDetailCinemaFailed } from './actions';

function* detailCinemaSaga({ cinemaId }) {
  // try{
  //   cosnt response = yield call(()=> callAPI())
  // }catch(error){
  //   yield put(actFetchDetailCinemaFailed(error));
  // }
}

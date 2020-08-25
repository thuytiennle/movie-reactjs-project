import { call, put, takeLatest, delay } from 'redux-saga/effects';
import {
  FETCH_CINEMA_BOOKING_ROOM_REQUEST,
  FETCH_CINEMA_BOOKING_TICKET_REQUEST,
} from './constants';
import { callAPI } from '../../../../utils/callAPI';
import {
  actFetchCinemaBookingRoomSuccess,
  actFetchCinemaBookingRoomFailed,
  actFetchCinemaBookingTicketSuccess,
  actFetchCinemaBookingTicketFailed,
} from './actions';
import { authHeader } from '../../../../utils/auth-header';

function* cinemaBookingRoomSaga({ showTimeId }) {
  try {
    // Delay to display loading
    yield delay(2500);
    const response = yield call(() =>
      callAPI(
        `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showTimeId}`,
        'GET',
        null,
      ),
    );
    yield put(actFetchCinemaBookingRoomSuccess(response.data));
  } catch (error) {
    yield put(actFetchCinemaBookingRoomFailed(error));
  }
}

function* cinemaBookingTicketSaga({ listSeatInfo }) {
  try {
    const params = { headers: authHeader() };
    const response = yield call(() =>
      callAPI(`QuanLyDatVe/DatVe`, 'POST', listSeatInfo, params),
    );
    yield put(actFetchCinemaBookingTicketSuccess(response.data));
  } catch (error) {
    yield put(actFetchCinemaBookingTicketFailed(error));
  }
}

function* cinemaBookingRoomWatcher() {
  yield takeLatest(FETCH_CINEMA_BOOKING_ROOM_REQUEST, cinemaBookingRoomSaga);
  yield takeLatest(
    FETCH_CINEMA_BOOKING_TICKET_REQUEST,
    cinemaBookingTicketSaga,
  );
}
export default cinemaBookingRoomWatcher;

import {
  FETCH_CINEMA_BOOKING_ROOM_REQUEST,
  FETCH_CINEMA_BOOKING_ROOM_SUCCESS,
  FETCH_CINEMA_BOOKING_ROOM_FAILED,
  BOOKING_SEAT,
  FETCH_CINEMA_BOOKING_TICKET_REQUEST,
  FETCH_CINEMA_BOOKING_TICKET_SUCCESS,
  FETCH_CINEMA_BOOKING_TICKET_FAILED,
  RESET_FOR_NEXT_BOOKING,
} from './constants';

const initialState = {
  cinemaBookingRoom: {},
  loadingCinemaBookingRoom: false,
  errorCinemaBookingRoom: null,
  openSucessDialog: false,
  cinemaBookingTicket: '',
  loadingCinemaBookingTicket: false,
  errorCinemaBookingTicket: null,
  listBookingSeat: [],
};

const cinemaBookingRoomReducer = (state = initialState, action) => {
  switch (action.type) {
    // Get data based on maLichChieu
    case FETCH_CINEMA_BOOKING_ROOM_REQUEST:
      state.cinemaBookingRoom = {};
      state.loadingCinemaBookingRoom = true;
      state.errorCinemaBookingRoom = null;
      return { ...state };
    case FETCH_CINEMA_BOOKING_ROOM_SUCCESS:
      state.cinemaBookingRoom = action.ciemaBookingRoom;
      state.loadingCinemaBookingRoom = false;
      state.errorCinemaBookingRoom = null;
      return { ...state };
    case FETCH_CINEMA_BOOKING_ROOM_FAILED:
      state.cinemaComplex = {};
      state.loadingCinemaBookingRoom = false;
      state.errorCinemaBookingRoom = action.error;
      return { ...state };
    // Post booking seat to API
    case FETCH_CINEMA_BOOKING_TICKET_REQUEST:
      state.cinemaBookingTicket = '';
      state.loadingCinemaBookingTicket = true;
      state.errorCinemaBookingTicket = null;
      return { ...state };
    case FETCH_CINEMA_BOOKING_TICKET_SUCCESS:
      state.cinemaBookingTicket = action.data;
      state.loadingCinemaBookingTicket = false;
      state.errorCinemaBookingTicket = null;
      // Booking successfully then opendialog
      state.openSucessDialog = true;
      return { ...state };
    case FETCH_CINEMA_BOOKING_TICKET_FAILED:
      state.cinemaBookingTicket = '';
      state.loadingCinemaBookingTicket = false;
      state.errorCinemaBookingTicket = action.error;
      return { ...state };
    // Booking seat
    case BOOKING_SEAT: {
      let listSeat = [...state.listBookingSeat];
      const { seat } = action;
      // If seat is selecting then push seat into listBookingSeat otherwise push it out
      if (seat.status) {
        listSeat.push(seat);
      } else {
        listSeat = listSeat.filter((item) => item.seatId !== seat.seatId);
      }
      state.listBookingSeat = [...listSeat];
      return { ...state };
    }
    // Close Booking Success Dialog
    case RESET_FOR_NEXT_BOOKING:
      state.cinemaBookingRoom = {};
      state.loadingCinemaBookingRoom = false;
      state.errorCinemaBookingRoom = null;
      state.openSucessDialog = false;
      state.cinemaBookingTicket = '';
      state.loadingCinemaBookingTicket = false;
      state.errorCinemaBookingTicket = null;
      state.listBookingSeat = [];
      return { ...state };
    default:
      return state;
  }
};

export default cinemaBookingRoomReducer;

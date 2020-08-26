import {
  FETCH_CINEMA_BOOKING_ROOM_REQUEST,
  FETCH_CINEMA_BOOKING_ROOM_SUCCESS,
  FETCH_CINEMA_BOOKING_ROOM_FAILED,
  BOOKING_SEAT,
  FETCH_CINEMA_BOOKING_TICKET_REQUEST,
  FETCH_CINEMA_BOOKING_TICKET_SUCCESS,
  FETCH_CINEMA_BOOKING_TICKET_FAILED,
  RESET_FOR_NEXT_BOOKING,
  DIALOG_MESSAGE,
  DISABLE_BOOKING_BUTTON,
  CLEAR_DIALOG_MESS,
} from './constants';

const initialState = {
  cinemaBookingRoom: {},
  loadingCinemaBookingRoom: false,
  errorCinemaBookingRoom: null,
  cinemaBookingTicket: '',
  loadingCinemaBookingTicket: false,
  errorCinemaBookingTicket: null,
  listBookingSeat: [],
  disableBookingButton: true,
  dialogMessType: '',
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
      state.dialogMessType = 'sucessful-booking';
      return { ...state };
    case FETCH_CINEMA_BOOKING_TICKET_FAILED:
      state.cinemaBookingTicket = '';
      state.loadingCinemaBookingTicket = false;
      state.errorCinemaBookingTicket = action.error;
      state.dialogMessType = 'fail-booking';
      return { ...state };
    // Booking seat
    case BOOKING_SEAT: {
      let listSeat = [...state.listBookingSeat];
      const { seat } = action;
      // If seat is selecting then push seat into listBookingSeat otherwise push it out
      // Check listBookingSeat is larger than 8 elements then announce error
      if (seat.status) {
        if (state.listBookingSeat.length > 7) {
          state.dialogMessType = 'seat-over-limit';
        } else {
          // Push into list booking
          listSeat.push(seat);
        }
      } else {
        listSeat = listSeat.filter((item) => item.seatId !== seat.seatId);
      }
      state.listBookingSeat = [...listSeat];
      // Check the outermost seat cannot unselected while the next chair is selected
      const isOuterSelect = listSeat.some((seatItem) => {
        if (seatItem.seatIndex === 2) {
          const indexOfFirstSeat = listSeat.findIndex(
            (item) => item.seatName === `${seatItem.rowsName}01`,
          );
          return indexOfFirstSeat === -1;
        }
        if (seatItem.seatIndex === seatItem.rowLength - 1) {
          const indexOfLastSeat = listSeat.findIndex(
            (item) =>
              item.seatName ===
              `${seatItem.rowsName}${`0${seatItem.rowLength}`.slice(-2)}`,
          );

          return indexOfLastSeat === -1;
        }
        return false;
      });
      // Check if there are any unselected middle seats between 2 selected seats. Use array.some
      const isMiddleSeats = listSeat.some((seatItem) => {
        const indexOfLeftSeat1 = listSeat.findIndex(
          (item) =>
            item.seatName ===
            `${seatItem.rowsName}${`0${seatItem.seatIndex - 1}`.slice(-2)}`,
        );
        const indexOfLeftSeat2 = listSeat.findIndex(
          (item) =>
            item.seatName ===
            `${seatItem.rowsName}${`0${seatItem.seatIndex - 2}`.slice(-2)}`,
        );
        const indexOfRightSeat1 = listSeat.findIndex(
          (item) =>
            item.seatName ===
            `${seatItem.rowsName}${`0${seatItem.seatIndex + 1}`.slice(-2)}`,
        );
        const indexOfRightSeat2 = listSeat.findIndex(
          (item) =>
            item.seatName ===
            `${seatItem.rowsName}${`0${seatItem.seatIndex + 2}`.slice(-2)}`,
        );
        return (
          (indexOfLeftSeat1 === -1 && indexOfLeftSeat2 !== -1) ||
          (indexOfRightSeat1 === -1 && indexOfRightSeat2 !== -1)
        );
      });
      if (isMiddleSeats) {
        // Annouce error
        state.dialogMessType = 'not-leave-middle-seat';
        // Diable booking button
        state.disableBookingButton = true;
      } else if (isOuterSelect) {
        // Annouce error
        state.dialogMessType = 'not-leave-outer-seat';
        // Diable booking button
        state.disableBookingButton = true;
      } else {
        // Diable booking button
        state.disableBookingButton = false;
      }
      return { ...state };
    }
    // Close Booking Success Dialog
    case RESET_FOR_NEXT_BOOKING:
      state.cinemaBookingRoom = {};
      state.loadingCinemaBookingRoom = false;
      state.errorCinemaBookingRoom = null;
      state.cinemaBookingTicket = '';
      state.loadingCinemaBookingTicket = false;
      state.errorCinemaBookingTicket = null;
      state.listBookingSeat = [];
      state.dialogMessType = '';
      return { ...state };
    // Error Booking
    case DIALOG_MESSAGE:
      state.dialogMessType = action.messageType;
      return { ...state };
    case DISABLE_BOOKING_BUTTON:
      state.disableBookingButton = action.isDiabled;
      return { ...state };
    case CLEAR_DIALOG_MESS:
      state.dialogMessType = '';
      return { ...state };
    default:
      return state;
  }
};

export default cinemaBookingRoomReducer;

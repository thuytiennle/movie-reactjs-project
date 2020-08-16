import {
  FETCH_CINEMA_BOOKING_ROOM_REQUEST,
  FETCH_CINEMA_BOOKING_ROOM_SUCCESS,
  FETCH_CINEMA_BOOKING_ROOM_FAILED,
  BOOKING_SEAT,
  FETCH_CINEMA_BOOKING_TICKET_REQUEST,
  FETCH_CINEMA_BOOKING_TICKET_SUCCESS,
  FETCH_CINEMA_BOOKING_TICKET_FAILED,
} from './constants';

export const actFetchCinemaBookingRoomRequest = (showTimeId) => {
  return {
    type: FETCH_CINEMA_BOOKING_ROOM_REQUEST,
    showTimeId,
  };
};
export const actFetchCinemaBookingRoomSuccess = (ciemaBookingRoom) => {
  return {
    type: FETCH_CINEMA_BOOKING_ROOM_SUCCESS,
    ciemaBookingRoom,
  };
};
export const actFetchCinemaBookingRoomFailed = (error) => {
  return {
    type: FETCH_CINEMA_BOOKING_ROOM_FAILED,
    error,
  };
};

export const actBookingSeat = (seat) => {
  return {
    type: BOOKING_SEAT,
    seat,
  };
};

export const actFetchCinemaBookingTicketRequest = (listSeatInfo) => {
  return {
    type: FETCH_CINEMA_BOOKING_TICKET_REQUEST,
    listSeatInfo,
  };
};
export const actFetchCinemaBookingTicketSuccess = (data) => {
  return {
    type: FETCH_CINEMA_BOOKING_TICKET_SUCCESS,
    data,
  };
};
export const actFetchCinemaBookingTicketFailed = (error) => {
  return {
    type: FETCH_CINEMA_BOOKING_TICKET_FAILED,
    error,
  };
};

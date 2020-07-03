import HomePage from '../containers/Home/HomePage';
import DetailMovie from '../containers/Home/DetailMovie';
import DetailCinema from '../containers/Home/DetailCinema';
import CinemaBookingRoom from '../containers/Home/CinemaBookingRoom';

export const routesHome = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/detail-movie/:id',
    exact: false,
    component: DetailMovie,
  },
  {
    path: '/detail-cinema/:cinemaId-:cinemaBranchIndex-:cinemaBranchId',
    exact: false,
    component: DetailCinema,
  },
  {
    path: '/cinema-booking-room',
    exact: false,
    component: CinemaBookingRoom,
  },
];

export const routesAdmin = [];

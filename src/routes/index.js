import { HomePage } from '../containers/Home/HomePage';
import { DetailMovie } from '../containers/Home/DetailMovie';
import { DetailCinema } from '../containers/Home/DetailCinema';
import { CinemaBookingRoom } from '../containers/Home/CinemaBookingRoom';
import { Profile } from '../containers/Home/Profile';

export const routesHome = [
  {
    path: '/',
    exact: true,
    // auth check if user login then can access router
    auth: false,
    component: HomePage,
  },
  {
    path: '/detail-movie/:id',
    exact: false,
    auth: false,
    component: DetailMovie,
  },
  {
    path: '/detail-cinema/:cinemaId/:cinemaBranchId',
    exact: false,
    auth: false,
    component: DetailCinema,
  },
  {
    path: '/cinema-booking-room/:showTimeId',
    exact: false,
    auth: true,
    component: CinemaBookingRoom,
  },
  {
    path: '/profile',
    exact: false,
    auth: true,
    component: Profile,
  },
];

export const routesAdmin = [];

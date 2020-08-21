import { CinemaBookingRoom } from '../containers/Home/CinemaBookingRoom';
import { DetailCinema } from '../containers/Home/DetailCinema';
import { DetailMovie } from '../containers/Home/DetailMovie';
import { HomePage } from '../containers/Home/HomePage';
import { Profile } from '../containers/Home/Profile';
import { DashBoard } from '../containers/Admin/DashBoad';
import { UserManage } from '../containers/Admin/UserManage';
import { MovieManage } from '../containers/Admin/MovieManage';
import { AddUser } from '../containers/Admin/UserManage/AddUser';
import { AddMovie } from '../containers/Admin/MovieManage/AddMovie';

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

export const routesAdmin = [
  {
    path: '/admin',
    exact: true,
    component: DashBoard,
  },
  {
    path: '/admin/user-manage',
    exact: true,
    component: UserManage,
  },
  {
    path: '/admin/user-manage/add-user',
    exact: false,
    component: AddUser,
  },
  {
    path: '/admin/movie-manage',
    exact: true,
    component: MovieManage,
  },
  {
    path: '/admin/movie-manage/add-movie',
    exact: false,
    component: AddMovie,
  },
];

import HomePage from '../containers/Home/HomePage';
import DetailMovie from '../containers/Home/DetailMovie';
import DetailCinema from '../containers/Home/DetailCinema';

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
    path: '/detail-cinema/:cinemaId',
    exact: false,
    component: DetailCinema,
  },
];

export const routesAdmin = [];

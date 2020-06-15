import HomePage from '../containers/Home/HomePage';
import DetailMovie from '../containers/Home/DetailMovie';

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
];

export const routesAdmin = [];

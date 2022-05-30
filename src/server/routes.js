import Homepage from '../pages/Homepage';
import { fetchMoviesOnServer } from './helper';

export const routes = [
  {
    path: '/search',
    exact: true,
    component: Homepage,
    fetchInitialData: () => fetchMoviesOnServer(),
  },
  {
    path: '/search/:searchQuery',
    component: Homepage,
    fetchInitialData: (path = '') => fetchMoviesOnServer(path.split('/').pop()),
  },
];

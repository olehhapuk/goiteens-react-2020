// import HomeView from './views/HomeView';
// import AllMoviesView from './views/AllMoviesView';
// import MovieDetailsView from './views/MovieDetailsView';

import { lazy } from 'react';

export const urls = {
  home: '/',
  allMovies: '/movies',
};

export const routes = [
  {
    exact: true,
    path: urls.home,
    component: lazy(() =>
      import('./views/HomeView' /* webpackChunkName: 'HomeView' */)
    ),
  },
  {
    exact: true,
    path: urls.allMovies,
    component: lazy(() =>
      import('./views/AllMoviesView' /* webpackChunkName: 'AllMoviesView' */)
    ),
  },
  {
    exact: false,
    path: `${urls.allMovies}/:movieId`,
    component: lazy(() =>
      import(
        './views/MovieDetailsView' /* webpackChunkName: 'MovieDetailsView' */
      )
    ),
  },
];

import { lazy } from 'react';

export const urls = {
  home: '/',
  movies: '/movies',
  notFound: '/404',
};

export const routes = [
  {
    path: urls.notFound,
    exact: true,
    component: lazy(() => import('./pages/NotFoundPage')),
  },
  {
    path: urls.home,
    exact: true,
    component: lazy(() => import('./pages/HomePage')),
  },
  {
    path: urls.movies,
    exact: true,
    component: lazy(() => import('./pages/MoviesPage')),
  },
  {
    path: urls.movies + '/:movieId',
    exact: true,
    component: lazy(() => import('./pages/MovieDetailsPage')),
  },
];

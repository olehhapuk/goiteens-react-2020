import HomeView from './views/HomeView';
import AllMoviesView from './views/AllMoviesView';
import MovieDetailsView from './views/MovieDetailsView';

export const urls = {
  home: '/',
  allMovies: '/movies',
};

export const routes = [
  {
    exact: true,
    path: urls.home,
    component: HomeView,
  },
  {
    exact: true,
    path: urls.allMovies,
    component: AllMoviesView,
  },
  {
    exact: true,
    path: `${urls.allMovies}/:movieId`,
    component: MovieDetailsView,
  },
];

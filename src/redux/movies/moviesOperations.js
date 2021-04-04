import * as actions from './moviesActions';
import * as services from '../../services/moviesApi';
import * as selectors from './moviesSelectors';

export const fetchTrending = () => (dispatch, getState) => {
  const movies = selectors.getMovies(getState());

  if (movies.length > 0) {
    return;
  }

  dispatch(actions.fetchTrendingRequest());

  services
    .fetchTrendingMovies()
    .then((res) => dispatch(actions.fetchTrendingSuccess(res.results)))
    .catch((error) => dispatch(actions.fetchTrendingError(error.message)));
};

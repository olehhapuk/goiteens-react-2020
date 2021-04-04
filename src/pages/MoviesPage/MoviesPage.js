import { Component } from 'react';
import { Header, Pagination, Message } from 'semantic-ui-react';
import qs from 'query-string';

import * as moviesApi from '../../services/moviesApi';

import styles from './MoviesPage.module.css';

import MovieList from '../../components/MovieList';
import Spinner from '../../components/Spinner';
import Searchbar from '../../components/Searchbar';

class MoviesPage extends Component {
  state = {
    movies: [],
    error: null,
    loading: false,
    totalPages: 0,
    windowWidth: 0,
  };

  componentDidMount() {
    const { history, location } = this.props;
    const queryString = qs.parse(location.search);

    if (queryString.query) {
      history.push({
        ...location,
        search: qs.stringify(queryString),
      });
    }

    window.addEventListener('resize', this.handleWindowResize);

    this.setState({
      windowWidth: window.innerWidth,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location !== prevProps.location) {
      this.fetchMovies();
    }

    if (prevState.movies !== this.state.movies) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = (e) => {
    this.setState({
      windowWidth: e.target.innerWidth,
    });
  };

  handlePageChange = (_, { activePage }) => {
    const { history, location } = this.props;

    const queryString = qs.parse(location.search);
    queryString.activePage = activePage;

    history.push({
      ...location,
      search: qs.stringify(queryString),
    });
  };

  handleSearch = (query) => {
    const { history, location } = this.props;

    const queryString = qs.parse(location.search);
    queryString.query = query;
    queryString.activePage = 1;

    history.push({
      ...location,
      search: qs.stringify(queryString),
    });
  };

  fetchMovies = () => {
    const { query, activePage } = qs.parse(this.props.location.search);

    if (!query || !activePage) {
      return;
    }

    this.setState({ loading: true, error: null });

    moviesApi
      .fetchMoviesByQuery(query, activePage)
      .then((res) =>
        this.setState({
          movies: res.results,
          totalPages: res.total_pages,
        })
      )
      .catch((error) => this.setState({ error: error.message }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { windowWidth, movies, totalPages, loading, error } = this.state;
    const { location } = this.props;

    const { query, activePage } = qs.parse(location.search);

    const isSmallScreen = windowWidth < 540;

    return (
      <>
        <Spinner loading={loading} />

        <Header as="h2">
          {query ? (
            <>
              Search results for <i>"{query}"</i>
            </>
          ) : (
            'Search movies'
          )}
        </Header>

        {error && <Message error>{error}</Message>}

        <Searchbar onSearch={this.handleSearch} />

        {movies.length > 0 && <MovieList movies={movies} />}

        {movies.length > 0 && (
          <div className={styles.paginationContainer}>
            <Pagination
              totalPages={totalPages}
              activePage={activePage}
              onPageChange={this.handlePageChange}
              boundaryRange={isSmallScreen ? 0 : 1}
              siblingRange={isSmallScreen ? 1 : 2}
              size={isSmallScreen ? 'tiny' : 'small'}
              borderless
            />
          </div>
        )}
      </>
    );
  }
}

export default MoviesPage;

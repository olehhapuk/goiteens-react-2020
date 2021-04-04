import { Component } from 'react';
import { Header, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';

import * as moviesOperations from '../../redux/movies/moviesOperations';
import * as moviesSelectors from '../../redux/movies/moviesSelectors';

import MovieList from '../../components/MovieList';
import Spinner from '../../components/Spinner';

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchTrending();
  }

  render() {
    const { movies, loading } = this.props;

    const error = null;

    return (
      <>
        <Spinner loading={loading} />

        <Header as="h2">Trending Movies</Header>
        {error && <Message error>{error}</Message>}

        {movies.length > 0 && <MovieList movies={movies} />}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: moviesSelectors.getMovies(state),
  loading: moviesSelectors.getLoading(state),
});

const mapDispatchToProps = {
  fetchTrending: moviesOperations.fetchTrending,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

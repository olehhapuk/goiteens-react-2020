import { Component } from 'react';
import { Header, Message } from 'semantic-ui-react';

import MovieList from '../../components/MovieList';
import Spinner from '../../components/Spinner';

class HomePage extends Component {
  render() {
    const trendingMovies = [];
    const error = null;

    return (
      <>
        <Spinner loading={false} />

        <Header as="h2">Trending Movies</Header>
        {error && <Message error>{error}</Message>}

        {trendingMovies.length > 0 && <MovieList movies={trendingMovies} />}
      </>
    );
  }
}

export default HomePage;

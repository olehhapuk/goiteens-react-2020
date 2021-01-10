import { Component } from 'react';
import { Link } from 'react-router-dom';

import { fetchAllShows } from '../services/showsApi';

export default class AllMoviesView extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.getShows();
  }

  getShows = () => {
    this.setState({
      loading: true,
      error: null,
    });

    fetchAllShows('batman')
      .then((res) => this.setState({ movies: res.data }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { movies, loading } = this.state;
    const { match } = this.props;

    return (
      <ul>
        {loading && <h3>Loading...</h3>}

        {movies.length > 0 &&
          movies.map((movie) => (
            <li key={movie.show.id}>
              <Link to={`${match.url}/${movie.show.id}`}>
                {movie.show.name}
              </Link>
            </li>
          ))}
      </ul>
    );
  }
}

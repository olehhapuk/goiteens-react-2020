import { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import { fetchAllShows } from '../services/showsApi';

import { urls } from '../routes';

import Searchbar from '../components/Searchbar';

export default class AllMoviesView extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);

    if (query) {
      this.getShows(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location) {
      const { query } = queryString.parse(this.props.location.search);

      if (query) {
        this.getShows(query);
      }
    }
  }

  getShows = (query) => {
    this.setState({
      loading: true,
      error: null,
    });

    fetchAllShows(query)
      .then((res) => this.setState({ movies: res.data }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearch = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `?query=${query}`,
    });
  };

  render() {
    const { movies, loading } = this.state;
    const { match } = this.props;

    return (
      <div>
        <Link to={urls.home}>Home</Link>

        <Searchbar onSearch={this.handleSearch} />

        <ul>
          {loading && <h3>Loading...</h3>}

          {movies.length > 0 &&
            movies.map((movie) => (
              <li key={movie.show.id}>
                <Link
                  to={{
                    pathname: `${match.url}/${movie.show.id}`,
                    state: {
                      from: this.props.location,
                    },
                  }}
                >
                  {movie.show.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

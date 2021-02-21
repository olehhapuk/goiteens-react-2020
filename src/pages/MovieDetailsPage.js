import { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

import Cast from './Cast';

import { fetchMovieDetails } from '../services/moviesApi';

const baseImageUrl = 'https://image.tmdb.org/t/p/original';

export default class MovieDetailsPage extends Component {
  state = {
    data: null,
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });

    fetchMovieDetails(this.props.match.params.movieId)
      .then((res) => this.setState({ data: res.data }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { match } = this.props;
    const { data, loading } = this.state;

    return (
      <div>
        <h1>Movie Details page</h1>
        {loading && <p>Loading...</p>}

        {data && (
          <>
            <h2>{data.title}</h2>
            <pre>{data.release_date}</pre>
            <p>{data.overview}</p>
            <img
              src={baseImageUrl + data.poster_path}
              alt={data.title}
              width={350}
            />

            <br />
          </>
        )}

        <Link to={`${match.url}/cast`}>Cast</Link>
        {/* <Link to={`${match.url}/reviews`}>Cast</Link> */}

        <Route path={`${match.path}/cast`} component={Cast} />
        {/* <Route path={`${match.path}/reviews`} component={Reviews} /> */}
      </div>
    );
  }
}

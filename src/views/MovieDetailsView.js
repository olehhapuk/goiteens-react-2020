import { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import MovieEpisodes from '../components/MovieEpisodes';

import { fetchShowDetails } from '../services/showsApi';

import { urls } from '../routes';

export default class MovieDetailsView extends Component {
  state = {
    movieData: null,
    loading: false,
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;

    this.setState({
      loading: true,
    });

    fetchShowDetails(movieId)
      .then((res) => this.setState({ movieData: res.data }))
      .finally(() => this.setState({ loading: false }));
  }

  goBack = () => {
    if (this.props.location.state && this.props.location.state.from) {
      this.props.history.push(this.props.location.state.from);
    } else {
      this.props.history.push(urls.allMovies);
    }
  };

  render() {
    const { loading, movieData } = this.state;
    const { match } = this.props;

    return (
      <div>
        {loading && <h3>Loading...</h3>}

        <button type="button" onClick={this.goBack}>
          Go back
        </button>

        {movieData && (
          <div>
            <h3>{movieData.name}</h3>
            <p>{movieData.premiered}</p>

            <Link to={`${match.url}/episodes`}>Show episodes</Link>

            <Switch>
              <Route
                path={`${match.path}/episodes`}
                component={MovieEpisodes}
              />
            </Switch>
          </div>
        )}
      </div>
    );
  }
}

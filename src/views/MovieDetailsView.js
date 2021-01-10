import { Component } from 'react';

import { fetchShowDetails } from '../services/showsApi';

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

  render() {
    const { loading, movieData } = this.state;

    return (
      <div>
        {loading && <h3>Loading...</h3>}

        {movieData && (
          <div>
            <h3>{movieData.name}</h3>
            <p>{movieData.premiered}</p>
          </div>
        )}
      </div>
    );
  }
}

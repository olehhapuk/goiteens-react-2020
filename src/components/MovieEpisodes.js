import { Component } from 'react';

import { fetchShowEpisodes } from '../services/showsApi';

export default class MovieEpisodes extends Component {
  state = {
    episodes: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true, error: null });

    fetchShowEpisodes(this.props.match.params.movieId)
      .then((res) => this.setState({ episodes: res.data }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { loading, episodes } = this.state;

    return (
      <ul>
        {loading && <h3>Loading...</h3>}

        {episodes.length > 0 &&
          episodes.map((episode) => (
            <li key={episode.id}>
              <h4>{episode.number}</h4>
              <p>{episode.name}</p>
            </li>
          ))}
      </ul>
    );
  }
}

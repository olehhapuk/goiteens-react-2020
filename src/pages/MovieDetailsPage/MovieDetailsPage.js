import { Component } from 'react';
import { Grid, Image, Message, Header } from 'semantic-ui-react';

import * as moviesApi from '../../services/moviesApi';
import { BASE_IMAGE_URL_W500 } from '../../utils/constants';

import styles from './MovieDetailsPage.module.css';

import Spinner from '../../components/Spinner';
import MovieParameters from './MovieParameters';

class MovieDetailsPage extends Component {
  state = {
    data: null,
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { match } = this.props;

    this.setState({ loading: true, error: null });

    moviesApi
      .fetchMovieDetails(match.params.movieId)
      .then((res) => this.setState({ data: res }))
      .catch((error) => this.setState({ error: error.message }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { data, loading, error } = this.state;

    return (
      <>
        <Spinner loading={loading} />
        {error && <Message error>{error}</Message>}

        {data && (
          <Grid>
            <Grid.Row>
              <Grid.Column largeScreen={6} computer={6} tablet={8} mobile={16}>
                <Image
                  src={BASE_IMAGE_URL_W500 + data.poster_path}
                  alt={data.title}
                />
              </Grid.Column>
              <Grid.Column
                largeScreen={10}
                computer={10}
                tablet={8}
                mobile={16}
              >
                <MovieParameters data={data} />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={16}>
                <Header as="h4" size="medium">
                  Overview
                </Header>
                <Header.Content as="p" className={styles.overview}>
                  {data.overview}
                </Header.Content>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;

import { Grid } from 'semantic-ui-react';

import MovieListItem from './MovieListItem';

function MovieList({ movies }) {
  return (
    <Grid>
      {movies.map((movie) => (
        <Grid.Column
          key={movie.id}
          widescreen={2}
          computer={4}
          tablet={4}
          mobile={16}
        >
          <MovieListItem
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            voteAverage={movie.vote_average}
            releaseDate={movie.release_date}
          />
        </Grid.Column>
      ))}
    </Grid>
  );
}

export default MovieList;

import { Label, Rating, List, Header } from 'semantic-ui-react';

import styles from './MovieParameters.module.css';

function MovieParameters({ data }) {
  return (
    <div className={styles.container}>
      <Header as="h2">{data.title}</Header>

      <List relaxed size="large">
        <List.Item>
          <b>Original Language:</b> {data.original_language.toUpperCase()}
        </List.Item>
        <List.Item>
          <b>Original Title:</b> {data.original_title}
        </List.Item>
        <List.Item>
          <b>Tagline:</b> {data.tagline}
        </List.Item>
        <List.Item>
          <b>Release Date:</b>{' '}
          {new Date(data.release_date).toLocaleDateString()}
        </List.Item>
        <List.Item>
          <b>Runtime:</b> {data.runtime} minutes
        </List.Item>
        <List.Item>
          <b>Status:</b> {data.status}
        </List.Item>
        <List.Item>
          <b>Budget: </b>
          {data.budget} $
        </List.Item>
        <List.Item>
          <b>Revenue: </b>
          {data.revenue} $
        </List.Item>
        <List.Item>
          <b>Genres: </b>

          {data.genres.map((genre) => (
            <Label key={genre.id}>{genre.name}</Label>
          ))}
        </List.Item>
        <List.Item>
          <b>Rating: </b>

          <Rating defaultRating={data.vote_average} maxRating={10} disabled />

          <span> {data.vote_count} votes</span>
        </List.Item>
      </List>
    </div>
  );
}

export default MovieParameters;

import { Image, Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { urls } from '../../../routes';
import { BASE_IMAGE_URL_W500 } from '../../../utils/constants';

const placeholderImageUrl =
  'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg';

function MovieListItem({ id, title, poster, voteAverage, releaseDate }) {
  const imageUrl = BASE_IMAGE_URL_W500 + poster;
  const formattedTitle = title.slice(0, 18) + '...';

  return (
    <Card fluid>
      <Image src={poster ? imageUrl : placeholderImageUrl} wrapped />
      <Card.Content>
        <Card.Header title={title}>
          {title.length > 18 ? formattedTitle : title}
        </Card.Header>
        <Card.Meta>{releaseDate}</Card.Meta>
        <Card.Description>
          <b>Rating:</b> {voteAverage + '/10'}
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
        <Button as={Link} to={`${urls.movies}/${id}`} attached>
          Read more
        </Button>
      </Card.Content>
    </Card>
  );
}

export default MovieListItem;

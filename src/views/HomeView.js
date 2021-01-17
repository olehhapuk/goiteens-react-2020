import { Link } from 'react-router-dom';

import { urls } from '../routes';

export default function HomeView() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={urls.allMovies}>All movies</Link>
    </div>
  );
}

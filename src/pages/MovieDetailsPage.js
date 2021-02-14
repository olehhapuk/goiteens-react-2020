import { Link, Route } from 'react-router-dom';

import Cast from './Cast';

export default function MovieDetailsPage(props) {
  return (
    <div>
      <h1>Movie Details page</h1>
      <Link to={`${props.match.url}/cast`}>Cast</Link>

      <Route path={`${props.match.path}/cast`} component={Cast} />
    </div>
  );
}

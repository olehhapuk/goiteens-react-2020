import { Link } from 'react-router-dom';

export default function HomeView() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/about">About</Link>
    </div>
  );
}

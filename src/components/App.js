import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

import HomeView from '../views/HomeView';
import AboutView from '../views/AboutView';
import NotFoundView from '../views/NotFoundView';

export default function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className="Nav-link"
            activeClassName="Nav-link_active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="Nav-link"
            activeClassName="Nav-link_active"
          >
            About
          </NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/about" component={AboutView} />
        <Route path="/404" component={NotFoundView} />
        <Redirect to="/404" />
      </Switch>
    </>
  );
}

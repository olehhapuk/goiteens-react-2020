import { NavLink } from 'react-router-dom';

import { urls } from '../../router';

import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink
        exact
        to={urls.home}
        className={styles.navbarLink}
        activeClassName={styles.navbarLink_active}
      >
        Trending Movies
      </NavLink>
      <NavLink
        to={urls.movies}
        className={styles.navbarLink}
        activeClassName={styles.navbarLink_active}
      >
        Search Movies
      </NavLink>
    </nav>
  );
}

export default Navbar;

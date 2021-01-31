import Link from '../Link';

import { urls } from '../../routes';

import Button from '../Button';
import withThemeContext from '../../hoc/withThemeContext';

import styles from './Navbar.module.css';

function Navbar({ theme }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Button type="button" onClick={theme.toggleTheme}>
            Toggle theme
          </Button>
        </li>
        <li className={styles.listItem}>
          <Link to={urls.login}>Login</Link>
        </li>
        <li className={styles.listItem}>
          <Link to={urls.home}>Home</Link>
        </li>
        <li className={styles.listItem}>
          <p>{theme.theme}</p>
        </li>
      </ul>
    </nav>
  );
}

export default withThemeContext(Navbar);

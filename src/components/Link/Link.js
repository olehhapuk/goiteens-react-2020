import { Link as RRDLink } from 'react-router-dom';

import styles from './Link.module.css';

function Link({ children, ...props }) {
  return (
    <RRDLink className={styles.link} {...props}>
      {children}
    </RRDLink>
  );
}

export default Link;

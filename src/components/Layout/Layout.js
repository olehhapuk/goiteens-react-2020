import React from 'react';
import PropTypes from 'prop-types';

import styles from './Layout.module.css';

function Layout(props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{props.title}</h2>
      {props.children}
    </div>
  );
}

Layout.defaultProps = {
  title: 'No title',
};

Layout.propTypes = {
  title: PropTypes.string,
};

export default Layout;

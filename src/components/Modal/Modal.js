import React, { Component } from 'react';

import styles from './Modal.module.css';

export default class Modal extends Component {
  clickEscape = (e) => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.clickEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.clickEscape);
  }

  render() {
    return (
      <div className={styles.backdrop}>
        <div className={styles.container}>{this.props.children}</div>
      </div>
    );
  }
}

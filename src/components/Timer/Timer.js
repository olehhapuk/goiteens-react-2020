import React, { Component } from 'react';

import styles from './Timer.module.css';

export default class Timer extends Component {
  state = {
    value: 0,
  };

  intervalId = null;

  startTimer = () => {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => {
        return {
          value: prevState.value + 1,
        };
      });
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { value } = this.state;

    return (
      <div className={styles.container}>
        <p className={styles.text}>{value}</p>
        <button type="button" className={styles.btn} onClick={this.startTimer}>
          Start
        </button>
      </div>
    );
  }
}

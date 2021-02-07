import { Component } from 'react';

import Button from '../Button';

import styles from './LoginForm.module.css';

const defaultState = {
  username: '',
  password: '',
};

export default class LoginForm extends Component {
  state = {
    ...defaultState,
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({
      ...defaultState,
    });
  };

  render() {
    const { username, password } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={this.handleInputChange}
          autoComplete="off"
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleInputChange}
          className={styles.input}
        />
        <Button type="submit">Login</Button>
      </form>
    );
  }
}

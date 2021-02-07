import { Component } from 'react';

import LoginForm from '../components/LoginForm';

import withAuthContext from '../hoc/withAuthContext';

class Login extends Component {
  handleLogin = (userData) => {
    this.props.auth.login(userData);
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm onLogin={this.handleLogin} />
      </div>
    );
  }
}

export default withAuthContext(Login);

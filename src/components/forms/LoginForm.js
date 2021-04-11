import { Component } from 'react';
import { TextField, Button, Box, Typography } from '@material-ui/core';

import Spinner from '../Spinner';

const initialState = {
  email: '',
  password: '',
};

class LoginForm extends Component {
  state = {
    ...initialState,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.login(this.state);

    this.setState({
      ...initialState,
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            autoComplete="off"
            label="E-Mail"
            type="email"
            name="email"
            placeholder="E-Mail"
            required
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            autoComplete="off"
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={this.handleChange}
          />
        </div>

        <Button type="submit" variant="contained" color="primary">
          Login
          {/* <Spinner loading={loading} /> */}
        </Button>
      </form>
    );
  }
}

export default LoginForm;

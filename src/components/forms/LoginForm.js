import { Component } from 'react';
import { TextField, Button, Box, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import * as authOperations from '../../redux/auth/authOperations';
import * as authSelectors from '../../redux/auth/authSelectors';

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
    const { loading, error } = this.props;

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

        {error && (
          <Box my={2}>
            <Typography variant="h4" component="h4" color="red">
              Error
            </Typography>
          </Box>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          Login
          <Spinner loading={loading} />
        </Button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: authSelectors.getLoading(state),
  error: authSelectors.getError(state),
});

const mapDispatchToProps = {
  login: authOperations.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

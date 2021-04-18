import { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
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
    const { isLoading, error } = this.props;

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

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading}
        >
          Login
          <Spinner loading={isLoading} />
        </Button>

        {error && <p>Error: {error}</p>}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: authSelectors.getLoading(state),
  error: authSelectors.getError(state),
});

const mapDispatchToProps = {
  login: authOperations.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

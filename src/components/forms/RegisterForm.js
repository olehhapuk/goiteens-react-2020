import { Component } from 'react';
import { TextField, Button, Box, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import * as authSelectors from '../../redux/auth/authSelectors';
import * as authOperations from '../../redux/auth/authOperations';

import Spinner from '../Spinner';

const initialState = {
  name: '',
  email: '',
  password: '',
};

class RegisterForm extends Component {
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

    this.props.register(this.state);

    this.setState({
      ...initialState,
    });
  };

  render() {
    const { name, email, password } = this.state;
    const { loading, error } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Name"
            type="text"
            name="name"
            placeholder="Name"
            required
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
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
          Register
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
  register: authOperations.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);

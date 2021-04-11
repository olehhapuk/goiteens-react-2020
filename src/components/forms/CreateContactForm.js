import { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';

import * as contactsOperations from '../../redux/contacts/contactsOperations';
import * as contactsSelectors from '../../redux/contacts/contactsSelectors';

import Spinner from '../Spinner';

const initialState = {
  name: '',
  number: '',
};

class CreateContactForm extends Component {
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

    this.props.addContact(this.state);

    this.setState({
      ...initialState,
    });
  };

  render() {
    const { name, number } = this.state;
    const { loading } = this.props;

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
            label="Number"
            type="tel"
            name="number"
            placeholder="Number"
            required
            value={number}
            onChange={this.handleChange}
          />
        </div>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          Add Contact
          <Spinner loading={loading} />
        </Button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  addContact: contactsOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateContactForm);

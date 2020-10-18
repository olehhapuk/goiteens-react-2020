import React from 'react';

export default class SignUpForm extends React.Component {
  state = {
    username: '',
    name: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);

    this.setState({
      username: '',
      name: '',
    });
  };

  render() {
    const { username, name } = this.state;

    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />

          <hr />

          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />

          <hr />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

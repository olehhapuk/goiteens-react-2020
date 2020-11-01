import React from 'react';
import { v4 } from 'uuid';

const Gender = {
  male: 'male',
  female: 'female',
};

export default class SignUpForm extends React.Component {
  state = {
    username: '',
    name: '',
    password: '',
    agreed: false,
    gender: Gender.male,
    age: '18',
  };

  agreedId = v4();

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

  handleAgreementChange = (e) => {
    this.setState({
      agreed: e.target.checked,
    });
  };

  render() {
    const { username, name, password, agreed, gender, age } = this.state;

    return (
      <div>
        <form onSubmit={this.handleFormSubmit} autoComplete="off">
          <input
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={this.handleChange}
          />

          <hr />

          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={this.handleChange}
          />

          <hr />

          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange}
          />

          <hr />

          <div>
            <label htmlFor={this.agreedId}>Agree with terms</label>
            <input
              type="checkbox"
              id={this.agreedId}
              checked={agreed}
              onChange={this.handleAgreementChange}
            />
          </div>

          <hr />

          <div>
            <h3>Gender</h3>
            <div>
              <label>Male</label>
              <input
                type="radio"
                name="gender"
                value={Gender.male}
                onChange={this.handleChange}
                checked={gender === Gender.male}
              />
            </div>
            <div>
              <label>Female</label>
              <input
                type="radio"
                name="gender"
                value={Gender.female}
                onChange={this.handleChange}
                checked={gender === Gender.female}
              />
            </div>
          </div>

          <hr />

          <div>
            <h3>Choose your age</h3>
            <select name="age" value={age} onChange={this.handleChange}>
              <option value="16">16</option>
              <option value="18">18</option>
              <option value="20">20</option>
            </select>
          </div>

          <hr />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

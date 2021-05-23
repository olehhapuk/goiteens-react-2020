import { Component } from 'react';

import RegisterForm from './RegisterForm';

class RegisterPage extends Component {
  handleSubmit = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <RegisterForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default RegisterPage;

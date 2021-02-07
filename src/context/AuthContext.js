import { createContext, Component } from 'react';

const AuthContext = createContext(null);

export default class AuthContextProvider extends Component {
  static Consumer = AuthContext.Consumer;

  onLogin = (userData) => {
    this.setState({ user: userData });
  };

  onLogout = () => {
    this.setState({ user: null });
  };

  state = {
    user: null,
    login: this.onLogin,
    logout: this.onLogout,
  };

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

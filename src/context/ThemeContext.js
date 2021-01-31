import { createContext, Component } from 'react';

import { Theme } from '../constants/theme';

const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
  static Consumer = ThemeContext.Consumer;

  toggleTheme = () => {
    this.setState(
      (prevState) => {
        return {
          theme: prevState.theme === Theme.Light ? Theme.Dark : Theme.Light,
        };
      },
      () => {
        this.updateThemeClass();
      }
    );
  };

  updateThemeClass = () => {
    document.querySelector('html').className = this.state.theme;
    localStorage.setItem('theme', this.state.theme);
  };

  state = {
    theme: Theme.Light,
    toggleTheme: this.toggleTheme,
  };

  componentDidMount() {
    const theme = localStorage.getItem('theme');

    if (theme) {
      this.setState(
        {
          theme: theme,
        },
        () => this.updateThemeClass()
      );
    } else {
      this.updateThemeClass();
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

import ThemeContext from '../context/ThemeContext';

export default function withThemeContext(WrappedComponent) {
  return function WithThemeContext(props) {
    return (
      <ThemeContext.Consumer>
        {(context) => <WrappedComponent {...props} theme={context} />}
      </ThemeContext.Consumer>
    );
  };
}

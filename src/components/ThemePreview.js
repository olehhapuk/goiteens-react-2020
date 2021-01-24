import ThemeContext from '../context/ThemeContext';

export default function ThemePreview() {
  return (
    <ThemeContext.Consumer>
      {(context) => <h1>Current theme is {context}</h1>}
    </ThemeContext.Consumer>
  );
}

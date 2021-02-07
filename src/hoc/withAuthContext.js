import AuthContext from '../context/AuthContext';

export default function withAuthContext(WrappedComponent) {
  return function WithAuthContext(props) {
    return (
      <AuthContext.Consumer>
        {(context) => <WrappedComponent {...props} auth={context} />}
      </AuthContext.Consumer>
    );
  };
}

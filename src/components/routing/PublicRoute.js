import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as authSelectors from '../../redux/auth/authSelectors';

import { urls } from '../../routes';

function PublicRoute({ component: Component, isAuthenticated, ...otherProps }) {
  return (
    <Route {...otherProps}>
      {(props) =>
        isAuthenticated && otherProps.restricted ? (
          <Redirect to={urls.home} />
        ) : (
          <Component {...props} />
        )
      }
    </Route>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);

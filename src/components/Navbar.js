import { AppBar, Toolbar, Typography, Box, Button } from '@material-ui/core';
import { connect } from 'react-redux';

import { urls } from '../routes';
import * as authSelectors from '../redux/auth/authSelectors';
import * as authOperations from '../redux/auth/authOperations';

import NavLink from './NavLink';

function Navbar({ isAuthenticated, logout, user }) {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Box mr="auto">
            <Typography variant="button" component="div">
              <NavLink to={urls.home}>Home</NavLink>

              {isAuthenticated && (
                <NavLink to={urls.contacts}>Contacts</NavLink>
              )}

              {!isAuthenticated && (
                <NavLink to={urls.register}>Register</NavLink>
              )}

              {!isAuthenticated && <NavLink to={urls.login}>Login</NavLink>}
            </Typography>
          </Box>

          {isAuthenticated && (
            <Box>
              <Typography variant="body1" component="span">
                Logged in as {user.name}
              </Typography>
              <Button variant="text" color="inherit" onClick={logout}>
                Logout
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Toolbar />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
  user: authSelectors.getUser(state),
});

const mapDispatchToProps = {
  logout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

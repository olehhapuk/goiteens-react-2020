import { AppBar, Toolbar, Typography, Box, Button } from '@material-ui/core';
import { connect } from 'react-redux';

import { urls } from '../routes';

import * as authSelectors from '../redux/auth/authSelectors';

import NavLink from './NavLink';

// const links = [
//   {
//     to: urls.home,
//     label: 'Home',
//   },
//   {
//     to: urls.contacts,
//     label: 'Contacts',
//   },
// ];

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
                <>
                  <NavLink to={urls.register}>Register</NavLink>
                  <NavLink to={urls.login}>Login</NavLink>
                </>
              )}
            </Typography>
          </Box>

          {isAuthenticated && (
            <Box>
              <Typography variant="body1" component="span">
                Logged in as User
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
});

export default connect(mapStateToProps)(Navbar);

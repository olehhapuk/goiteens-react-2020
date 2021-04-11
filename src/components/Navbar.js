import { AppBar, Toolbar, Typography, Box, Button } from '@material-ui/core';

import { urls } from '../routes';

import NavLink from './NavLink';

function Navbar({ isAuthenticated, logout, user }) {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Box mr="auto">
            <Typography variant="button" component="div">
              <NavLink to={urls.home}>Home</NavLink>
              <NavLink to={urls.contacts}>Contacts</NavLink>
              <NavLink to={urls.register}>Register</NavLink>
              <NavLink to={urls.login}>Login</NavLink>
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

export default Navbar;

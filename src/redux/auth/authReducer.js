import { createReducer, combineReducers } from '@reduxjs/toolkit';

import * as actions from './authActions';

const tokenReducer = createReducer(null, {
  [actions.loginSuccess]: (state, action) => action.payload.token,
  [actions.registerSuccess]: (state, action) => action.payload.token,
  [actions.logoutSuccess]: () => null,
  [actions.fetchUserDataError]: () => null,
});

const defaultUserState = {
  email: null,
  name: null,
};

const userReducer = createReducer(defaultUserState, {
  [actions.loginSuccess]: (state, action) => action.payload.user,
  [actions.registerSuccess]: (state, action) => action.payload.user,
  [actions.fetchUserDataSuccess]: (state, action) => action.payload,
  [actions.logoutSuccess]: () => defaultUserState,
});

const loadingReducer = createReducer(false, {
  // Fetch user data
  [actions.fetchUserDataRequest]: () => true,
  [actions.fetchUserDataSuccess]: () => false,
  [actions.fetchUserDataError]: () => false,
  // Login
  [actions.loginRequest]: () => true,
  [actions.loginSuccess]: () => false,
  [actions.loginError]: () => false,
  // Register
  [actions.registerRequest]: () => true,
  [actions.registerSuccess]: () => false,
  [actions.registerError]: () => false,
  // Logout
  [actions.logoutRequest]: () => true,
  [actions.logoutSuccess]: () => false,
  [actions.logoutError]: () => false,
});

const errorReducer = createReducer(null, {
  [actions.fetchUserDataError]: (state, action) => action.payload,
  [actions.fetchUserDataRequest]: () => null,
  [actions.loginError]: (state, action) => action.payload,
  [actions.loginRequest]: () => null,
});

export default combineReducers({
  token: tokenReducer,
  user: userReducer,
  loading: loadingReducer,
  error: errorReducer,
});

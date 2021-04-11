import { createReducer, combineReducers } from '@reduxjs/toolkit';

import * as actions from './authActions';

const tokenReducer = createReducer(null, {
  [actions.loginSuccess]: (state, action) => action.payload.token,
  [actions.registerSuccess]: (state, action) => action.payload.token,
  [actions.fetchUserDataError]: () => null,
  [actions.logoutSuccess]: () => null,
});

const initialUserState = {
  email: null,
  name: null,
};

const userReducer = createReducer(initialUserState, {
  [actions.loginSuccess]: (state, action) => action.payload.user,
  [actions.registerSuccess]: (state, action) => action.payload.user,
  [actions.fetchUserDataSuccess]: (state, action) => action.payload,
  [actions.logoutSuccess]: () => initialUserState,
});

const loadingReducer = createReducer(false, {
  // Login
  [actions.loginRequest]: () => true,
  [actions.loginSuccess]: () => false,
  [actions.loginError]: () => false,
  // Register
  [actions.registerRequest]: () => true,
  [actions.registerSuccess]: () => false,
  [actions.registerError]: () => false,
  // Fetch User Data
  [actions.fetchUserDataRequest]: () => true,
  [actions.fetchUserDataSuccess]: () => false,
  [actions.fetchUserDataError]: () => false,
  // Logout
  [actions.logoutRequest]: () => true,
  [actions.logoutSuccess]: () => false,
  [actions.logoutError]: () => false,
});

const errorReducer = createReducer(null, {
  // Login
  [actions.loginRequest]: () => null,
  [actions.loginError]: (state, action) => action.payload,
  // Register
  [actions.registerRequest]: () => null,
  [actions.registerError]: (state, action) => action.payload,
  // Fetch User Data
  [actions.fetchUserDataRequest]: () => null,
  [actions.fetchUserDataError]: (state, action) => action.payload,
  // Logout
  [actions.logoutRequest]: () => null,
  [actions.logoutError]: (state, action) => action.payload,
});

export default combineReducers({
  token: tokenReducer,
  user: userReducer,
  loading: loadingReducer,
  error: errorReducer,
});

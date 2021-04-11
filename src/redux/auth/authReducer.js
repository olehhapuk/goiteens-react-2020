import { createReducer, combineReducers } from '@reduxjs/toolkit';

import * as actions from './authActions';

const tokenReducer = createReducer(null, {
  [actions.loginSuccess]: (state, action) => action.payload.token,
  [actions.registerSuccess]: (state, action) => action.payload.token,
});

export default combineReducers({
  token: tokenReducer,
});

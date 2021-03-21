import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import * as tasksActions from './tasksActions';

const tasksReducer = createReducer([], {
  [tasksActions.add]: (state, action) => [...state, action.payload],
  [tasksActions.remove]: (state, action) => {
    return state.filter((task) => {
      return task.id !== action.payload;
    });
  },
});

const filterReducer = createReducer('', {
  [tasksActions.change]: (state, action) => action.payload,
});

export default combineReducers({
  items: tasksReducer,
  filter: filterReducer,
});

import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import * as tasksActions from './tasksActions';

const tasksReducer = createReducer([], {
  [tasksActions.fetchTasksSuccess]: (state, action) => action.payload,
  [tasksActions.addTaskSuccess]: (state, action) => [...state, action.payload],
  [tasksActions.removeTaskSuccess]: (state, action) => {
    return state.filter((task) => {
      return task.id !== action.payload;
    });
  },
});

const filterReducer = createReducer('', {
  [tasksActions.change]: (state, action) => action.payload,
});

const loadingReducer = createReducer(false, {
  // Fetch tasks
  [tasksActions.fetchTasksRequest]: () => true,
  [tasksActions.fetchTasksSuccess]: () => false,
  [tasksActions.fetchTasksError]: () => false,
  // Add task
  [tasksActions.addTaskRequest]: () => true,
  [tasksActions.addTaskSuccess]: () => false,
  [tasksActions.addTaskError]: () => false,
  // Remove task
  [tasksActions.removeTaskRequest]: () => true,
  [tasksActions.removeTaskSuccess]: () => false,
  [tasksActions.removeTaskError]: () => false,
});

const errorReducer = createReducer(null, {
  // Fetch tasks
  [tasksActions.fetchTasksError]: (state, action) => action.payload,
  [tasksActions.fetchTasksSuccess]: () => null,
  [tasksActions.fetchTasksRequest]: () => null,
});

export default combineReducers({
  items: tasksReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});

// Store shape
// tasks: {
//   items: [],
//   filter: '',
//   loading: false,
//   error: null,
// }

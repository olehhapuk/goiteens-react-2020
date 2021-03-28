import { createAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

export const add = createAction('tasks/addItem', (text) => ({
  payload: {
    id: v4(),
    text,
  },
}));
export const remove = createAction('tasks/removeItem');
export const change = createAction('tasks/changeFilter');

export const fetchTasksRequest = createAction('tasks/fetchTasksRequest');
export const fetchTasksSuccess = createAction('tasks/fetchTasksSuccess');
export const fetchTasksError = createAction('tasks/fetchTasksError');

export const addTaskRequest = createAction('tasks/addTaskRequest');
export const addTaskSuccess = createAction('tasks/addTaskSuccess');
export const addTaskError = createAction('tasks/addTaskError');

export const removeTaskRequest = createAction('tasks/removeTaskRequest');
export const removeTaskSuccess = createAction('tasks/removeTaskSuccess');
export const removeTaskError = createAction('tasks/removeTaskError');

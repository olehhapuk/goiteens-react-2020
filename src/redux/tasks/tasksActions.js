import { createAction } from '@reduxjs/toolkit';

export const fetchTasksStart = createAction('tasks/fetch');
export const fetchTasksEnd = createAction('tasks/fetchEnd');

export const add = createAction('tasks/addItem');

export const remove = createAction('tasks/removeItem');
export const change = createAction('tasks/changeFilter');

import { v4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const add = createAction('tasks/addItem', (text) => ({
  payload: {
    id: v4(),
    text,
  },
}));

export const remove = createAction('tasks/removeItem');

export const change = createAction('tasks/changeFilter');

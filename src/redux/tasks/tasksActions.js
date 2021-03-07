import { v4 } from 'uuid';

import * as actionTypes from './tasksActionTypes';

export const add = (text) => {
  return {
    type: actionTypes.add,
    payload: {
      id: v4(),
      text,
      completed: false,
    },
  };
};

export const remove = (taskId) => {
  return {
    type: actionTypes.remove,
    payload: taskId,
  };
};

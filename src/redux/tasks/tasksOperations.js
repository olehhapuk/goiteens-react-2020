import axios from 'axios';

import * as tasksActions from './tasksActions';

const baseUrl = 'http://localhost:5000';

export const fetchAllTasks = () => (dispatch) => {
  axios
    .get(`${baseUrl}/tasks`)
    .then((res) => dispatch(tasksActions.fetchTasksEnd(res.data)));
};

export const addTask = (text) => (dispatch) => {
  const newTask = {
    text,
  };

  axios
    .post(`${baseUrl}/tasks`, newTask)
    .then((res) => dispatch(tasksActions.add(res.data)));
};

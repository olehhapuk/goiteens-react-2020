import axios from '../../axiosConfig';

import * as tasksActions from './tasksActions';

export const fetchTasks = () => (dispatch) => {
  dispatch(tasksActions.fetchTasksRequest());

  axios
    .get('/tasks')
    .then((res) => dispatch(tasksActions.fetchTasksSuccess(res.data)))
    .catch((error) => dispatch(tasksActions.fetchTasksError(error.message)));
};

export const addTask = (text) => (dispatch) => {
  dispatch(tasksActions.addTaskRequest());

  axios
    .post('/tasks', { text })
    .then((res) => dispatch(tasksActions.addTaskSuccess(res.data)))
    .catch((error) => dispatch(tasksActions.addTaskError(error.message)));
};

export const removeTask = (taskId) => (dispatch) => {
  dispatch(tasksActions.removeTaskRequest());

  axios
    .delete(`/tasks/${taskId}`)
    .then(() => dispatch(tasksActions.removeTaskSuccess(taskId)))
    .catch((error) => dispatch(tasksActions.removeTaskError(error.message)));
};

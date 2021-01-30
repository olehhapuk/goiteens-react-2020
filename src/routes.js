import TaskListView from './views/TaskListView';
import SwitcherView from './views/SwitcherView';

export const urls = {
  taskList: '/task-list',
  slider: '/slider',
};

export const routes = [
  {
    path: urls.taskList,
    exact: true,
    component: TaskListView,
  },
  {
    path: urls.switcher,
    exact: true,
    component: SwitcherView,
  },
];

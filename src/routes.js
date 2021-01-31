import Home from './views/Home';
import Login from './views/Login';

export const urls = {
  home: '/',
  login: '/login',
};

export const routes = [
  {
    path: urls.home,
    exact: true,
    component: Home,
  },
  {
    path: urls.login,
    exact: true,
    component: Login,
  },
];

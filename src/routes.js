import { lazy } from 'react';

export const urls = {
  home: '/',
  register: '/register',
  login: '/login',
  contacts: '/contacts',
};

export const routes = [
  {
    path: urls.home,
    exact: true,
    component: lazy(() => import('./views/HomeView')),
  },
  {
    path: urls.contacts,
    exact: true,
    component: lazy(() => import('./views/ContactsView')),
  },
  {
    path: urls.register,
    exact: true,
    component: lazy(() => import('./views/RegisterView')),
  },
  {
    path: urls.login,
    exact: true,
    component: lazy(() => import('./views/LoginView')),
  },
];

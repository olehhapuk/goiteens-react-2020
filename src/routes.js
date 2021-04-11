import { lazy } from 'react';

export const urls = {
  home: '/',
  register: '/register',
  login: '/login',
  contacts: '/contacts',
};

function createRoute(
  path,
  lazyFunc,
  isPrivate = false,
  isRestricted = false,
  exact = true
) {
  return {
    path,
    exact,
    component: lazy(lazyFunc),
    private: isPrivate,
    restricted: isRestricted,
  };
}

export const routes = [
  createRoute(urls.home, () => import('./views/HomeView'), false, false),
  createRoute(urls.contacts, () => import('./views/ContactsView'), true, false),
  createRoute(urls.register, () => import('./views/RegisterView'), false, true),
  createRoute(urls.login, () => import('./views/LoginView'), false, true),
];

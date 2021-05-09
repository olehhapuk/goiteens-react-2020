import Counter from './components/Counter';
import RegisterForm from './components/RegisterForm';
import Poster from './components/Poster';
import PostDetails from './components/PostDetails';
import Contacts from './components/Contacts';

export const routes = [
  {
    path: '/counter',
    exact: true,
    component: Counter,
  },
  {
    path: '/posts',
    exact: true,
    component: Poster,
  },
  {
    path: '/posts/:id',
    exact: true,
    component: PostDetails,
  },
  {
    path: '/register',
    exact: true,
    component: RegisterForm,
  },
  {
    path: '/contacts',
    exact: true,
    component: Contacts,
  },
];

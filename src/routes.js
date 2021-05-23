import Counter from './components/CounterRedux';
import RegisterForm from './components/RegisterForm';
import Poster from './components/Poster';
import PostDetails from './components/PostDetails';
import Contacts from './components/Contacts';
import Settings from './components/Settings';

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
  {
    path: '/settings',
    exact: true,
    component: Settings,
  },
];

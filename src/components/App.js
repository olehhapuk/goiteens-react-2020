import { Route, Switch } from 'react-router-dom';

import { routes } from '../routes';

export default function App() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  );
}

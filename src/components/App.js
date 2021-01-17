import { Route, Switch } from 'react-router-dom';
import { Suspense } from 'react';

import { routes } from '../routes';

export default function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </Suspense>
  );
}

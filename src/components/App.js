import { Route, Switch } from 'react-router-dom';
import { Suspense } from 'react';

import { routes } from '../router';

function App() {
  return (
    <div>
      <h1>App</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;

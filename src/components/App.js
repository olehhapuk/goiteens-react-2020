import { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from '../routes';

import Navbar from './Navbar';
import Spinner from './Spinner';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Suspense fallback={<Spinner page loading />}>
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;

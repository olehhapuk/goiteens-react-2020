import { Switch, Route } from 'react-router-dom';

import { routes } from '../routes';

import Layout from './Layout';

function App() {
  return (
    <Layout>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </Layout>
  );
}

export default App;

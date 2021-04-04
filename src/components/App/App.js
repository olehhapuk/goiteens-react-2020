import { Switch, Route, Redirect } from 'react-router-dom';

import { routes, urls } from '../../routes';

import Layout from '../Layout';

function App() {
  return (
    <Layout>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}

        <Route path="*">
          <Redirect to={urls.notFound} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

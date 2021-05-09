import { Switch, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

import { routes } from '../routes';

import Navbar from './Navbar';

function App() {
  return (
    <Container>
      <Navbar />

      <Switch>
        {routes.map(({ component: Component, ...route }) => (
          <Route key={route.path} {...route}>
            <Component />
          </Route>
        ))}
      </Switch>
    </Container>
  );
}

export default App;

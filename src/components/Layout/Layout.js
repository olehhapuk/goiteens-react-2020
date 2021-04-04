import { Suspense } from 'react';
import { Container } from 'semantic-ui-react';

import Navbar from '../Navbar';
import Spinner from '../Spinner';

function Layout({ children }) {
  return (
    <Container>
      <Navbar />

      <Suspense fallback={<Spinner loading />}>{children}</Suspense>
    </Container>
  );
}

export default Layout;

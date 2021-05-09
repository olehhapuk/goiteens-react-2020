import { Link, Stack } from '@chakra-ui/react';
import { Link as RRDLink } from 'react-router-dom';

function Navbar() {
  return (
    <Stack p="12px 0px" spacing="3" direction="row">
      <Link as={RRDLink} to="/counter">
        Counter
      </Link>
      <Link as={RRDLink} to="/posts">
        Poster
      </Link>
      <Link as={RRDLink} to="/register">
        Register
      </Link>
      <Link as={RRDLink} to="/contacts">
        Contacts
      </Link>
    </Stack>
  );
}

export default Navbar;

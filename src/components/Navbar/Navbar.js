import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

import { urls } from '../../routes';

const menuItems = [
  {
    to: urls.home,
    label: 'Home',
  },
  {
    to: urls.movies,
    label: 'Movies',
  },
];

function Navbar({ location }) {
  return (
    <Menu text>
      {menuItems.map((item) => (
        <Menu.Item
          key={item.to}
          as={Link}
          to={item.to}
          active={location.pathname === item.to}
        >
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
}

export default withRouter(Navbar);

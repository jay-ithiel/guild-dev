import React from 'react';
import { withRouter } from 'react-router';

import Logo from './logo';
import Search from '../search/search';
import NavMenu from './nav_menu/nav_menu';

const Navbar = props => (
  <nav id='navbar'>
    Navbar Component
    <NavMenu />
  </nav>
);

export default withRouter(Navbar);

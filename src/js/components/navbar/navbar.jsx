import React from 'react';
import { withRouter } from 'react-router';

import Logo from './logo';
import NavSearch from '../search/nav_search';
import NavMenu from './nav_menu/nav_menu';

const Navbar = props => (
  <nav id='navbar' className=''>
    <Logo />
    <NavSearch />
    <a href='/blogs/new'>Write a blog</a>
    <NavMenu />
  </nav>
);

export default withRouter(Navbar);

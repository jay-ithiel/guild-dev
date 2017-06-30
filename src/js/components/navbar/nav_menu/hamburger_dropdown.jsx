import React from 'react';
import { withRouter } from 'react-router';

const HamburgerDropdown = () => (
  <ul id='hamburger-dropdown'>
    <li>My Blogs</li>
    <li>Profile</li>
    <li>Log Out</li>
  </ul>
);

export default withRouter(HamburgerDropdown);

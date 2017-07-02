import React from 'react';
import { withRouter } from 'react-router';

const HamburgerDropdown = () => (
    <div className=''>
          <ul id='hamburger-dropdown' className=''>
            <li>My Blogs</li>
            <li>Profile</li>
            <li>Log Out</li>
          </ul>
    </div>
);

export default withRouter(HamburgerDropdown);

import React from 'react';

import HamburgerMenu from './hamburger_menu';

const UserNavMenu = () => (
    <div id='user-nav-menu'>
        <a href='/blogs/new' className='white skinny'>Write a blog</a>
        <HamburgerMenu />
    </div>
);

export default UserNavMenu;

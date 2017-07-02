import React from 'react';

import HamburgerDropdown from './hamburger_dropdown';

const HamburgerMenu = () => (
  <div id='hamburger-menu'>
    <span className='hamburger-slab'></span>
    <span className='hamburger-slab'></span>
    <span className='hamburger-slab'></span>
    <HamburgerDropdown />
  </div>
);

export default HamburgerMenu;

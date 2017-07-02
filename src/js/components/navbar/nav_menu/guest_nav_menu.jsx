import React from 'react';
import { handleSignIn } from '../../../util/blockstack_session_actions';

const GuestNavMenu = () => (
  <div id='guest-nav-menu'>
    <span onClick={ handleSignIn }>Sign In</span>
  </div>
);

export default GuestNavMenu;

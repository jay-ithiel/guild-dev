import React from 'react';
import { handleSignIn } from '../../../util/blockstack_session_actions';

const GuestNavMenu = () => (
  <div id='guest-nav-menu'>
    <span className='green skinny letter-space-1' onClick={ handleSignIn }>Sign In</span>
  </div>
);

export default GuestNavMenu;

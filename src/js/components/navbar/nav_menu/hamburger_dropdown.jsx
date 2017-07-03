import React from 'react';
import { withRouter } from 'react-router';
import { handleSignOut } from '../../../util/blockstack_session_actions';

const close = e => {
    e.stopPropagation();
    $('#hamburger-dropdown-container').fadeOut();
};

const HamburgerDropdown = ({ history }) => (
    <div id='hamburger-dropdown-container'>
        <span onClick={ close }
            className='modal no-desktop close-modal'>x
        </span>

        <ul id='hamburger-dropdown' className=''>
            <li onClick={ () => null }>My Blogs</li>
            <li onClick={ () => null }>Profile</li>
            <li onClick={ handleSignOut }>Log Out</li>
        </ul>
    </div>
);

export default withRouter(HamburgerDropdown);

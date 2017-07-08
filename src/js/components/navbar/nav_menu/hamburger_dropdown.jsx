import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { signout } from '../../../actions/session_actions';

const close = e => {
    e.stopPropagation();
    $('#hamburger-dropdown-container').fadeOut();
};

const HamburgerDropdown = props => (
    <div id='hamburger-dropdown-container'>
        <span onClick={ close }
            className='modal no-desktop close-modal'>x
        </span>

        <ul id='hamburger-dropdown' className=''>
            <li onClick={ () => null }>My Blogs</li>
            <li onClick={ () => null }>Profile</li>
            <li onClick={ props.signout }>Log Out</li>
        </ul>
    </div>
);

const mapDispatchToProps = dispatch => ({
    signout: () => dispatch(signout())
});

// export default withRouter(HamburgerDropdown);
export default connect(null, mapDispatchToProps)(HamburgerDropdown);

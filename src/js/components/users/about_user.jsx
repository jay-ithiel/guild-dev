import React from 'react';
import { connect } from 'react-redux';

import UserSVG from 'react-icons/lib/fa/user';

const AboutUser = props => {
    const user = props.currentUser;

    return !user ? <div></div> : (
        <div id='about-user' className='flex'>
            <div>
                <div id='about-user-img'></div>
            </div>

            <div>
                <h4 id='about-user-name'>
                    {/* { user.profile.givenName } { user.profile.familyName } */}
                    Lorem Ipsum
                </h4>
                <p id='about-user-bio'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    currentUser: state.session.currentUser
});

export default connect(mapStateToProps, null)(AboutUser);

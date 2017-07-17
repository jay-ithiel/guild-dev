import React from 'react';
import { connect } from 'react-redux';

const AboutUser = props => {
    const user = props.currentUser;

    return !user ? <div></div> : (
        <div id='about-user' className='flex'>
            <div>
                <img src='' id='about-user-img' alt='Profile Image' />
                <h4 id='about-user-name'>
                    { user.profile.givenName } { user.profile.familyName }
                </h4>
            </div>

            <div>
                <p id='about-user-bio'>
                    Hello World! This is the user's intro/bio. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    currentUser: state.session.currentUser
});

export default connect(mapStateToProps, null)(AboutUser);

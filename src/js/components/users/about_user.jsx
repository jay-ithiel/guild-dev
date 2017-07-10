import React from 'react';
import { connect } from 'react-redux';

const AboutUser = props => (
    <div id='about-user' className='flex'>
        <div>
            <img src={ props.currentUser.image[0].contentUrl } id='about-user-img' alt='Blog Image' />
            <h4 id='about-user-name'>
                User Name
                {/* props.currentUser.name */}
            </h4>
        </div>

        <div>
            <p id='about-user-bio'>
                Hello World! This is the user's intro/bio. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.session.currentUser
});

export default connect(mapStateToProps, null)(AboutUser);

import React from 'react';
import { withRouter } from 'react-router';

const Logo = ({ history }) => (
    <img id='logo'
        className='btn'
        onClick={ () => history.push('/') }
        src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1499820814/guild_logo-green_pl6kk1.png' />
);

export default withRouter(Logo);

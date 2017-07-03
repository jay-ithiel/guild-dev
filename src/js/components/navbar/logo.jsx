import React from 'react';
import { withRouter } from 'react-router';

const Logo = ({ history }) => (
    <img id='logo'
        className='btn'
        onClick={ () => history.push('/') }
        src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1498777018/blogstack_ljmzcy.png' />
);

export default withRouter(Logo);

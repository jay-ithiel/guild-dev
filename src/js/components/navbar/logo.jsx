import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
    <Link to='/'>
        <img id='logo' className='btn'
            src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1499820814/guild_logo-green_pl6kk1.png'
        />
    </Link>
);

export default Logo;

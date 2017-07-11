import React from 'react';
import SignIn from './signin';

const SignInPage = () => (
    <section className='signin-bg full-screen flex-center flex-column'>
        {/* <div id='signin-content'> */}
            <img id='signin-guild-logo'
                src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1499813779/guild_logo_moqbzh.png' />

            <h3 id='signin-guild-head'>guild</h3>
            <span id='signin-guild-span'>decentralized blogging</span>

            <SignIn />
        {/* </div> */}
    </section>
);

export default SignInPage;

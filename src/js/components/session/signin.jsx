import React from 'react';
import { handleSignIn } from '../../util/blockstack_session_actions';

const SignIn = () => (
    <div id='signin' className='full flex-center'>
        <button onClick={ handleSignIn } className='btn primary-btn'>Sign In With Blockstack</button>
    </div>
);

export default SignIn;

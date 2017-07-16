import {
    makeAuthRequest,
    redirectToSignIn,
    signUserOut
} from 'blockstack';
import * as blockstack from 'blockstack';
global.blockstack = blockstack;

export const signin = () => {
    // var privateKey = undefined, appDomain = window.location.hostname;
    // var authRequest = makeAuthRequest(privateKey, appDomain);
    // blockstack.redirectToSignInWithAuthRequest(authRequest);
    redirectToSignIn();
};

export const signout = () => {
    signUserOut(window.location.origin);
};

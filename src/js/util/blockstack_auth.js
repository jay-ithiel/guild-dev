import {
    makeAuthRequest,
    redirectToSignIn,
    signUserOut
} from 'blockstack';
import * as blockstack from 'blockstack';
global.blockstack = blockstack;

export const signin = () => {
    // Blockstack version 0.7
    var privateKey = undefined, appDomain = window.location.hostname;
    var authRequest = makeAuthRequest(privateKey, appDomain);
    // debugger;
    // redirectToSignIn(authRequest);

    // Blockstack version 0.8.1
    // blockstack.redirectToSignInWithAuthRequest(authRequest);
    redirectToSignIn();

};

export const signout = () => {
    signUserOut(window.location.origin);
};

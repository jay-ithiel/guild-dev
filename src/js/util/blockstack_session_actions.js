import {
    makeAuthRequest,
    redirectUserToSignIn,
    signUserOut
} from 'blockstack';

export const handleSignIn = event => {
    event.preventDefault();

    debugger;

    var privateKey  = null;
    var appDomain   = window.location.hostname;
    var authRequest = makeAuthRequest(privateKey, appDomain);

    redirectUserToSignIn(authRequest);
};

export const handleSignOut = event => {
    event.preventDefault();
    signUserOut(window.location.origin);
};

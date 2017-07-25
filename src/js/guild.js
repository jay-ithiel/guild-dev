require('../../.env.js');

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import {
    isSignInPending,
    signUserIn,
    isUserSignedIn,
    loadUserData,
    Person,
    handlePendingSignIn
} from 'blockstack';

import { receiveCurrentUser } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', event => {
    window.cloudinary_options = {
        cloud_name: process.env['CLOUD_NAME'],
        upload_preset: process.env['UPLOAD_PRESET']
    };

    const root = document.getElementById('root');
    let store = configureStore();

    if (isUserSignedIn()) {
        store.dispatch(receiveCurrentUser( loadUserData() ));
    } else if (isSignInPending()) {
        handlePendingSignIn(userData => {
            window.location = window.location.origin;
        });
    }

    ReactDOM.render(<Root store={ store } />, root);

    // NOTE: DEVELOPMENT ONLY
    // Allows easy access to store from chrome debugger. Remove before production
    window.store = store;
});

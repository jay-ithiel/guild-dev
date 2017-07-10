import React from 'react';
import ReactDOM from 'react-dom';
import {
    isSignInPending,
    signUserIn,
    isUserSignedIn,
    loadUserData,
    Person,
    handlePendingSignIn
} from 'blockstack';
window.blockstack = require('blockstack');
window.blockstackStorage = require('blockstack-storage');

import Root from './components/root';
import configureStore from './store/store';
import { receiveCurrentUser } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', event => {
    const root = document.getElementById('root');
    let store = configureStore();

    if (isUserSignedIn()) {
        // Blockstack version 8
        let userData = loadUserData();
        store.dispatch(receiveCurrentUser(userData.profile));

        // Blockstack version 7
        // loadUserData(userData => {
        //     let person = new Person(userData.profile);
        //     store.dispatch(receiveCurrentUser(person));
        // });
    } else if (isSignInPending()) {
        // Blockstack version < 0.8
        // signUserIn(userData => {
        //     window.location = window.location.origin;
        // });

        // Blockstack version 0.8.1
        handlePendingSignIn(userData => {
            window.location = window.location.origin;
        });
    }

    ReactDOM.render(<Root store={ store } />, root);

    // NOTE: DEVELOPMENT ONLY
    // Allows easy access to store from chrome debugger. Remove before production
    window.store = store;
});

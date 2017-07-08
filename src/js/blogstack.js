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

import Root from './components/root';
import configureStore from './store/store';
import { receiveCurrentUser } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', event => {
    const root = document.getElementById('root');
    let store = configureStore();

    if (isUserSignedIn()) {
        loadUserData(userData => {
            let person = new Person(userData.profile);
            store.dispatch(receiveCurrentUser(person));
        });
    } else if (isSignInPending()) {
        handlePendingSignIn(userData => {
            window.location = window.location.origin;
        });
        // signUserIn(userData => {
        //     window.location = window.location.origin;
        // });
    }

    ReactDOM.render(<Root store={ store } />, root);

    // NOTE: DEVELOPMENT ONLY
    // Allows easy access to store from chrome debugger. Remove before production
    window.store = store;
});

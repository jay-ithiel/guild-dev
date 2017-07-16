import React from 'react';
import ReactDOM from 'react-dom';
window.blockstack = require('blockstack');
window.blockstackStorage = require('blockstack-storage');

import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', event => {
    const root = document.getElementById('root');
    let store = configureStore();

    ReactDOM.render(<Root store={ store } />, root);

    // NOTE: DEVELOPMENT ONLY
    // Allows easy access to store from chrome debugger. Remove before production
    window.store = store;
});

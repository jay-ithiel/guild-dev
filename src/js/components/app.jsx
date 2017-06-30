import React from 'react';
import { Route } from 'react-router';
import { isUserSignedIn } from 'blockstack';

// Loads dependencies to compile SASS to CSS
// fix path
// require("!style-loader!css-loader!sass-loader!../../public/stylesheets/sass/all.scss");
import Home from './home/home';
import Navbar from './navbar/navbar';

const App = () => (
  <div id='app' className=''>
    App Component
    <Route exact path='/' component={ Home }></Route>
  </div>
);

export default App;

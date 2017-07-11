import React from 'react';
import { Route } from 'react-router';
import { isUserSignedIn } from 'blockstack';

// Loads dependencies to compile SASS to CSS
require("!style-loader!css-loader!sass-loader!../../stylesheets/sass/all.scss");

import Navbar from './navbar/navbar';
import Home from './home/home';
import SignInPage from './session/signin_page';
import BlogForm from './blogs/blog_form/blog_form_container';
import Blog from './blogs/blog';

const App = () => (
    <div id='app' className=''>
        <Navbar />
        <Route exact path='/' component={ Home }></Route>
        <Route path='/signin' component={ SignInPage }></Route>
        <Route exact path='/blogs/new'  component={ BlogForm }></Route>
        <Route exact path='/blogs/edit/:id' component={ BlogForm }></Route>
        <Route exact path='/blogs/show' component={ Blog }></Route>
        {/*
            <Route path='/blogs/:id'  component={ Blog     }></Route>
            <Route path='/profile' component={ Profile }></Route>
            <Route path='/blogs/user' component={ UserBlogs }></Route>
        */}
    </div>
);

export default App;

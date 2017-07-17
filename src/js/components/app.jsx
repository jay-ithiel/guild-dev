import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
// Loads dependencies to compile SASS to CSS
require("!style-loader!css-loader!sass-loader!../../stylesheets/sass/all.scss");

import Navbar from './navbar/navbar';
import Home from './home/home';
import SignInPage from './session/signin_page';
import BlogForm from './blogs/blog_form/blog_form_container';
import Blog from './blogs/blog';
import UserBlogs from './blogs/user_blogs';

import {
    isSignInPending,
    signUserIn,
    isUserSignedIn,
    loadUserData,
    Person,
    handlePendingSignIn
} from 'blockstack';
import { requestBlogs } from '../actions/blog_actions';
import { receiveCurrentUser } from '../actions/session_actions';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (isUserSignedIn()) {
            this.props.receiveCurrentUser(loadUserData());
        } else if (isSignInPending()) {
            handlePendingSignIn(userData => {
                window.location = window.location.origin;
            });
        }
        this.props.requestBlogs();
    }

    render() {
        return (
            <div id='app' className=''>
                <Navbar />
                <Route exact path='/' component={Home}></Route>
                <Route path='/signin' component={SignInPage}></Route>
                <Route exact path='/blogs/new'  component={BlogForm}></Route>
                <Route exact path='/blogs/edit/:id' component={BlogForm}></Route>
                <Route exact path='/blogs/user' component={UserBlogs}></Route>
                <Route exact path='/blogs/:id' component={Blog}></Route>

                {/*
                    <Route path='/profile' component={ Profile }></Route>
                */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    blogs: state.blogs.index,
    blogIndex: state.blogs.blogIndex
});

const mapDispatchToProps = dispatch => ({
    receiveCurrentUser: userData => dispatch(receiveCurrentUser(userData)),
    requestBlogs: () => dispatch(requestBlogs())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

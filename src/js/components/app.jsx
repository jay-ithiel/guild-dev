import React from 'react';
import { connect } from 'react-redux';
import { Switch, withRouter, Route } from 'react-router';
// Loads dependencies to compile SASS to CSS
require("!style-loader!css-loader!sass-loader!../../stylesheets/sass/all.scss");

import Navbar from './navbar/navbar';
import Home from './home/home';
import SignInPage from './session/signin_page';
import BlogForm from './blogs/blog_form/blog_form_container';
import Blog from './blogs/blog';
import UserBlogs from './blogs/user_blogs';
import Profile from './users/profile';

import { requestBlogs } from '../actions/blog_actions';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestBlogs();
    }

    render() {
        return (
            <div id='app' className=''>
                <Navbar />

                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/signin' component={SignInPage}></Route>
                    <Route exact path='/blogs/new'  component={BlogForm}></Route>
                    <Route exact path='/blogs/edit/:id' component={BlogForm}></Route>
                    <Route exact path='/blogs/user' component={UserBlogs}></Route>
                    <Route exact path='/blogs/:id' component={Blog}></Route>
                    <Route exact path='/users/:username' component={Profile}></Route>
                </Switch>
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

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App));

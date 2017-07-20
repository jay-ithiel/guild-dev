import { connect } from 'react-redux';
import BlogForm from './blog_form';
import {
    createBlog,
    updateBlog,
    saveBlogs,
    requestBlog,
    requestBlogs
} from '../../../actions/blog_actions';
import * as blockstack from 'blockstack';

const mapStateToProps = state => ({
    isUserSignedIn: blockstack.isUserSignedIn(),
    currentUser: state.session.currentUser,
    blogs: state.blogs.index,
    blogErrors: state.blogs.errors,
    blogIndex: state.blogs.blogIndex
});

const mapDispatchToProps = dispatch => ({
    createBlog: blogs => dispatch(createBlog(blogs)),
    updateBlog: blog => dispatch(updateBlog(blog)),
    saveBlogs: blogs => dispatch(saveBlogs(blogs)),
    requestBlog: id => dispatch(requestBlog(id)),
    requestBlogs: () => dispatch(requestBlogs())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogForm);

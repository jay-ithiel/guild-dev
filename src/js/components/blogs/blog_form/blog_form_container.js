import { connect } from 'react-redux';
import BlogForm from './blog_form';
import {
    createBlog,
    updateBlog,
    requestBlog,
    requestBlogs
} from '../../../actions/blog_actions';
import * as blockstack from 'blockstack';

const mapStateToProps = state => ({
    isUserSignedIn: blockstack.isUserSignedIn(),
    currentUser: state.session.currentUser,
    blogErrors: state.blog.errors
});

const mapDispatchToProps = dispatch => ({
    createBlog: blog => dispatch(createBlog(blog)),
    updateBlog: blog => dispatch(updateBlog(blog)),
    requestBlog: id => dispatch(requestBlog(id)),
    requestBlogs: () => dispatch(requestBlogs())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogForm);

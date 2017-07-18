import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteBlog } from '../../actions/blog_actions';

const BlogLinkActions = ({ blog, isUserBlogs, dispatchDeleteBlog }) => {
    return !isUserBlogs ? <div></div> : (
        <div>
            <span>Edit</span>
            ====
            <span onClick={ () => dispatchDeleteBlog(blog.id) }>Delete</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    dispatchDeleteBlog: id => dispatch(deleteBlog(id))
});

export default connect(null, mapDispatchToProps)(BlogLinkActions);

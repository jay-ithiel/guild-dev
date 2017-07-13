import * as blockstack from 'blockstack';
import {
    RECEIVE_BLOG,
    RECEIVE_BLOGS
} from '../actions/blog_actions';
var STORAGE_FILE = 'blogs.json';

export const createBlog = (blog, dispatch) => {
    debugger;
    // blockstack.putFile('../../blogs_storage.json', JSON.stringify(blog));
    blockstack.putFile(STORAGE_FILE, JSON.stringify(blog)).then((blogInfo) => {
        console.log('dispatching BLOG SAVED action');
        debugger;
        dispatch({
            type: 'BLOG_SAVED'
        });
    });
};

export const fetchBlogs = dispatch => {
    var blogs;
    blockstack.getFile(STORAGE_FILE).then((blogItems) => {
        blogItems = JSON.parse(blogItems || '[]');
        blogItems.forEach((blog, index) => {
            blog.id = index;
        });
        blogs = blogItems;
    });
    dispatch({
        type: RECEIVE_BLOGS,
        blogs
    });
};

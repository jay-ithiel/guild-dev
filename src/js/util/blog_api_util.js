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

export const fetchBlogs = () => {
    var blogs;
    blockstack.getFile(STORAGE_FILE).then((blogs) => {
        blogs = JSON.parse(blogs || '[]');
        blogs.forEach((blog, index) => {
            blog.id = index;
        });
    });
    dispatch({
        type: RECEIVE_BLOGS,
        blogs
    });
};

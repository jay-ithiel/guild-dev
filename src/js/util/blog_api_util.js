import * as blockstack from 'blockstack';
import {
    RECEIVE_BLOG,
    RECEIVE_BLOGS
} from '../actions/blog_actions';
var STORAGE_FILE = 'blogs.json';

export const createBlog = () => {
    return async(blog, dispatch) => {
        await blockstack.putFile(STORAGE_FILE, JSON.stringify(blog));
        dispatch({
            type: RECEIVE_BLOG,
            blog
        });
    };
};

export const fetchBlogs = () => {
    return async(dispatch) => {
        var blogs;
        await blockstack.getFile(STORAGE_FILE).then((blogs) => {
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
};

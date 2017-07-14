import * as blockstack from 'blockstack';
import {
    RECEIVE_BLOG,
    RECEIVE_BLOGS
} from '../actions/blog_actions';
var STORAGE_FILE = 'blogs.json';

export const createBlog = (blogs, dispatch) => {
    debugger;
    blockstack.putFile(STORAGE_FILE, JSON.stringify(blogs)).then((blogInfo) => {
        console.log('dispatching BLOG SAVED action');
        debugger;
        dispatch({
            type: 'BLOG_SAVED'
        });
    });
};

export const fetchBlogs = dispatch => {
    var blogs, blogIndex;
    debugger;
    blockstack.getFile(STORAGE_FILE).then((blogItems) => {
        blogItems = JSON.parse(blogItems || '[]');
        debugger;
        blogItems.forEach((blog, index) => {
            blog.id = index;
            blogIndex = index;
        });
        debugger;
        blogs = blogItems;
    });
    dispatch({
        type: RECEIVE_BLOGS,
        blogs,
        blogIndex
    });
};

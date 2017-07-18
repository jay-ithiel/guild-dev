import {
    getFile,
    putFile
} from 'blockstack';

import {
    RECEIVE_BLOG,
    RECEIVE_BLOGS,
    RECEIVE_USER_BLOGS
} from '../actions/blog_actions';

var STORAGE_FILE = 'blogs.json';

export const createBlog = (blogs, dispatch) => {
    putFile(STORAGE_FILE, JSON.stringify(blogs));
    // .then((blogInfo) => {
    //     dispatch({
    //         type: 'BLOG_SAVED'
    //     });
    // });
};

export const fetchBlogs = dispatch => {
    var blogs = {}, blogIndex;

    getFile(STORAGE_FILE).then(blogItems => {
        blogItems = JSON.parse(blogItems || '[]');

        Object.keys(blogItems).forEach((id, index) => {
            blogItems[id].id = index+1;
            blogIndex = index+1;
        });

        blogs = blogItems;

        dispatch({
            type: RECEIVE_BLOGS,
            blogs,
            blogIndex
        });
    });
};

export const fetchUserBlogs = (user, dispatch) => {
    var userBlogs = {}, blogIndex;

    getFile(STORAGE_FILE).then(blogItems => {
        blogItems = JSON.parse(blogItems || '[]');

        Object.keys(blogItems).forEach(id => {
            if (blogItems[id].authorId === user.username) {
                userBlogs[id] = blogItems[id];
            }
        });

        dispatch({
            type: RECEIVE_USER_BLOGS,
            userBlogs
        });
    });
};

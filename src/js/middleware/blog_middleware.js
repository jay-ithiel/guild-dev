import {
  CREATE_BLOG,
  REQUEST_BLOG,
  REQUEST_BLOGS,
  UPDATE_BLOG,
  DELETE_BLOG,
  receiveBlog,
  receiveBlogs,
  removeBlog,
  receiveBlogErrors
} from '../actions/blog_actions';

import {
    createBlog,
    fetchBlogs
} from '../util/blog_api_util';

const BlogMiddleware = ({ getState, dispatch }) => next => action => {
    debugger;

    switch(action.type) {
        case CREATE_BLOG:
            createBlog(action.blog, dispatch);
            return next(action);

        case REQUEST_BLOG:

            return next(action);

        case REQUEST_BLOGS:
            fetchBlogs();
            return next(action);

        case UPDATE_BLOG:

            return next(action);

        case DELETE_BLOG:

            return next(action);

        default:
            return next(action);
    }
};

export default BlogMiddleware;

import {
  CREATE_BLOG,
  REQUEST_BLOG,
  REQUEST_BLOGS,
  REQUEST_USER_BLOGS,
  UPDATE_BLOG,
  DELETE_BLOG,
  receiveBlog,
  receiveBlogs,
  receiveUserBlogs,
  removeBlog,
  receiveBlogErrors
} from '../actions/blog_actions';

import {
    createBlog,
    fetchBlogs,
    fetchUserBlogs,
    deleteBlog
} from '../util/blog_api_util';

const BlogMiddleware = ({ getState, dispatch }) => next => action => {
    switch(action.type) {
        case CREATE_BLOG:
            createBlog(action.blogs, dispatch);
            return next(action);

        case REQUEST_BLOG:

            return next(action);

        case REQUEST_BLOGS:
            fetchBlogs(dispatch);
            return next(action);

        case REQUEST_USER_BLOGS:
            fetchUserBlogs(action.user, dispatch);
            return next(action);

        case UPDATE_BLOG:

            return next(action);

        case DELETE_BLOG:
            deleteBlog(action.id, dispatch);
            return next(action);

        default:
            return next(action);
    }
};

export default BlogMiddleware;

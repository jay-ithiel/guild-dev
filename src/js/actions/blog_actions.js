export const CREATE_BLOG = 'CREATE_BLOG';
export const createBlog = blogs => ({
  type: CREATE_BLOG,
  blogs
});

export const REQUEST_BLOG = 'REQUEST_BLOG';
export const requestBlog = id => ({
  type: REQUEST_BLOG,
  id
});

export const REQUEST_BLOGS = 'REQUEST_BLOGS';
export const requestBlogs = tags => ({
  type: REQUEST_BLOGS,
  tags
});

export const REQUEST_USER_BLOGS = 'REQUEST_USER_BLOGS';
export const requestUserBlogs = user => ({
    type: REQUEST_USER_BLOGS,
    user
});

export const UPDATE_BLOG = 'UPDATE_BLOG';
export const updateBlog = (blogs, router) => ({
  type: UPDATE_BLOG,
  blogs,
  router
});

export const DELETE_BLOG = 'DELETE_BLOG';
export const deleteBlog = id => ({
  type: DELETE_BLOG,
  id
});

export const REMOVE_BLOG = 'REMOVE_BLOG';
export const removeBlog = id => ({
  type: REMOVE_BLOG,
  id
});

export const RECEIVE_BLOG = 'RECEIVE_BLOG';
export const receiveBlog = blog => ({
  type: RECEIVE_BLOG,
  blog
});

export const RECEIVE_BLOGS = 'RECEIVE_BLOGS';
export const receiveBlogs = blogs => ({
  type: RECEIVE_BLOGS,
  blogs
});

export const RECEIVE_USER_BLOGS = 'RECEIVE_USER_BLOGS';
export const receiveUserBlogs = userBlogs => ({
    type: RECEIVE_BLOGS,
    userBlogs
});

export const RECEIVE_BLOG_ERRORS = 'RECEIVE_BLOG_ERRORS';
export const receiveBlogErrors = (errors) => ({
  type: RECEIVE_BLOG_ERRORS,
  errors
});

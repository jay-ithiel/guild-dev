import merge from 'lodash/merge';
import {
  RECEIVE_BLOG,
  RECEIVE_BLOGS,
  RECEIVE_BLOG_ERRORS,
  REMOVE_BLOG
} from '../actions/blog_actions';

const _defaultState = {
    index: {},
    errors: []
};

const BlogReducer = (oldState = _defaultState, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);

    // check action values
    if (action.type !== "@@redux/INIT") {
        debugger;
    }

    switch(action.type) {
        case RECEIVE_BLOG:
            newState.index[action.blog.id] = action.blog;
            newState.errors = [];
            return newState;

        case RECEIVE_BLOGS:
            newState.index = action.blogs;
            newState.errors = [];
            return newState;

        default:
            return oldState;
    }
};

export default BlogReducer;

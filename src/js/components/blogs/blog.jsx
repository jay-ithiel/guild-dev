import React from 'react';

import AboutUser from '../users/about_user';
import CommentForm from '../comments/comment_form';
import CommentsContainer from '../comments/comments_container';

class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.mapBlog = this.mapBlog.bind(this);
    }

    componentDidMount() {
        // fetch Blog by id in the route: '/blogs/:id'
        // this.props.requestBlog(this.props.routeParams.blogId);
    }

    mapBlog() {
        // if (!this.props.blogs[this.props.routeParams.blogId]) { return null; }
        // return this.props.blogs[this.props.routeParams.blogId];
        return {};
    }

    render() {
        let blog = this.mapBlog();
        if (!blog) {
            return (
                <div></div>
            );
        } else {
            return (
                <div className='blog-bg'>
                    <div className='blog'>
                        <div className='blog-content'>
                            <div className='blink-img'>
                                <img className='blog-img' src='' alt='Blog Image' />
                            </div>

                            <div className='blink-intro'>
                                <span className='blink-title'>
                                    Blog Title
                                    {/* blog.title */}
                                </span>

                                <p className='blink-body'>
                                    Hello World! This is a blog. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    {/* blog.body */}
                                </p>
                            </div>
                        </div>

                        <CommentForm />
                    </div>
                </div>
            );
        }
    }
}

// const Blog = ({ blog }) => (
//     <div id='blog' className='full-screen'>
//         <h3 id='blog-title' className='blog-show-section'>
//             {/* blog.title */}
//             Blog Title
//         </h3>
//
//         <img id='blog-img' alt='Blog Image' className='blog-show-section' src='' />
//
//         <p id='blog-body' className='blog-show-section'>
//             {/* blog.body */}
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//         </p>
//
//         <div className='blog-show-section'>
//             <AboutUser />
//         </div>
//
//         <CommentForm />
//
//     </div>
// );

export default Blog;

import React from 'react';
import { connect } from 'react-redux';

import AboutUser from '../users/about_user';
import CommentForm from '../comments/comment_form';
import CommentsContainer from '../comments/comments_container';

class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blog: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        let id = nextProps.history.location.pathname.substring(7)[0];
        let blog = nextProps.blogs[id];
        if (blog) { this.setState({ blog: blog }); }
    }

    render() {
        let blog = this.state.blog;

        return (
            <section id='layout'>
                <div id='blog' className=''>
                    <h3 id='blog-title' className='blog-show-section'>
                        { blog.title }
                    </h3>

                    <img id='blog-img' alt='Blog Image' className='blog-show-section' src={ blog.imageUrl } />

                    <p id='blog-body' className='blog-show-section'>
                        { blog.body }
                    </p>

                    <div className='blog-show-section'>
                        <AboutUser />
                    </div>

                    {/* <CommentForm /> */}
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    blogs: state.blogs.index
});

export default connect(mapStateToProps, null)(Blog);

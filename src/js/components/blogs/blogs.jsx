import React from 'react';
import { connect } from 'react-redux';

import BlogLink from './blog_link';
import { requestBlogs } from '../../actions/blog_actions';

class Blogs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: {}
        };
        
        this.mapBlogLinks = this.mapBlogLinks.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ blogs: nextProps.blogs });
    }

    mapBlogLinks() {
        return Object.keys(this.state.blogs).reverse().map((blogId, index) => (
            <BlogLink key={index} blog={ this.state.blogs[blogId] }/>
        ));
    }

    render() {
        return (
            <ul id='blogs' className='border-box-sizing'>
                { this.mapBlogLinks() }
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    blogs: state.blogs.index
});

const mapDispatchToProps = dispatch => ({
    requestBlogs: () => dispatch(requestBlogs())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Blogs);

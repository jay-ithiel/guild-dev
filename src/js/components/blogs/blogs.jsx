import React from 'react';
import { connect } from 'react-redux';

import BlogLink from './blog_link';
import { requestBlogs } from '../../actions/blog_actions';

class Blogs extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestBlogs();
    }

    render() {
        return (
            <ul id='blogs' className='border-box-sizing'>
                <BlogLink />
                <BlogLink />
                <BlogLink />
                <BlogLink />
                <BlogLink />
                <BlogLink />
            </ul>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    requestBlogs: () => dispatch(requestBlogs())
});

export default connect(null, mapDispatchToProps)(Blogs);

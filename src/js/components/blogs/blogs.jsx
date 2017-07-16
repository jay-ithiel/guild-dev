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

        this.mapBlogs = this.mapBlogs.bind(this);
    }

    componentDidMount() {
        this.props.requestBlogs();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ blogs: nextProps.blogs });
    }

    mapBlogs() {
        return Object.keys(this.state.blogs).map((blogId, index) => (
            <BlogLink key={index} blog={ this.state.blogs[blogId] }/>
        ));
    }

    render() {
        return (
            <ul id='blogs' className='border-box-sizing'>
                { this.mapBlogs() }
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

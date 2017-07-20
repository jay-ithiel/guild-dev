import React from 'react';
import { connect } from 'react-redux';
import { isUserSignedIn, isSignInPending } from 'blockstack';
import BlogLink from './blog_link';
import SignInPage from '../session/signin_page';
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
        return Object.keys(this.props.blogs).reverse().map((blogId, index) => (
            <BlogLink key={index} blog={ this.props.blogs[blogId] }/>
        ));
    }

    render() {
        if (!isUserSignedIn() && !isSignInPending()) { return <SignInPage/> }

        let blogLinks = this.mapBlogLinks();
        return blogLinks.length === 0 ? (
            <ul id='blogs' className='border-box-sizing'>
                No blogs have been written yet. Be the first to write one!
            </ul>
        ) : (
            <ul id='blogs' className='border-box-sizing'>
                { blogLinks }
            </ul>
        )
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

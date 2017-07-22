import React from 'react';
import { connect } from 'react-redux';
import { requestUserBlogs } from '../../actions/blog_actions';
import BlogLink from './blog_link/blog_link';
var Loader = require('react-loaders').Loader;

class UserBlogs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userBlogs: null
        }

        this.mapBlogLink = this.mapBlogLinks.bind(this);
    }

    componentDidMount() {
        this.props.requestUserBlogs(this.props.currentUser);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ userBlogs: nextProps.userBlogs });
    }

    mapBlogLinks() {
        return Object.keys(this.state.userBlogs).map((blogId, index) => (
            <BlogLink key={index} blog={ this.state.userBlogs[blogId] } isUserBlogs={true}/>
        ));
    }

    render() {
        if (this.state.userBlogs === null) {
            return (
                <ul id='blogs' className='border-box-sizing flex-center'>
                    <Loader type="ball-clip-rotate" id='blogs-loader' active/>
                </ul>
            );
        }

        return this.state.blogs === null ? (
            <ul id='blogs' className='border-box-sizing flex-center'>
                <Loader type="ball-clip-rotate" id='blogs-loader' active/>
            </ul>
        ) : (
            <section id='blogs' className='border-box-sizing'>
                { this.mapBlogLinks() }
            </section>
        )

        return (
            <section id='blogs' className='border-box-sizing'>
                { this.mapBlogLinks() }
            </section>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    blogs: state.blogs.index,
    userBlogs: state.blogs.userBlogs
});

const mapDispatchToProps = dispatch => ({
    requestUserBlogs: user => dispatch(requestUserBlogs(user))
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(UserBlogs);

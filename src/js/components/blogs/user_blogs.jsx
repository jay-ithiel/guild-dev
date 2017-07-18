import React from 'react';
import { connect } from 'react-redux';
import { requestUserBlogs } from '../../actions/blog_actions';
import BlogLink from './blog_link';

class UserBlogs extends React.Component {
    constructor(props) {
        super(props);

        this.mapBlogLink = this.mapBlogLinks.bind(this);
    }

    componentDidMount() {
        this.props.requestUserBlogs(this.props.currentUser);
    }

    mapBlogLinks() {
        return Object.keys(this.props.userBlogs).map((blogId, index) => (
            <BlogLink key={index} blog={ this.props.userBlogs[blogId] } isUserBlogs={true}/>
        ));
    }

    render() {
        return (
            <section id='blogs' className='border-box-sizing'>
                { this.mapBlogLinks() }
            </section>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    userBlogs: state.blogs.userBlogs
});

const mapDispatchToProps = dispatch => ({
    requestUserBlogs: user => dispatch(requestUserBlogs(user))
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(UserBlogs);

import React from 'react';
import { connect } from 'react-redux';

class UserBlogs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userBlogs: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        
    }

    render() {
        return (
            <section id='user-blogs'>

            </section>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    blogs: state.blogs.index
});

export default UserBlogs;

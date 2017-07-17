import React from 'react';

class UserBlogs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userBlogs: {}
        };
    }

    render() {
        return (
            <section id='user-blogs'>
                User Blogs
            </section>
        );
    }
}

export default UserBlogs;

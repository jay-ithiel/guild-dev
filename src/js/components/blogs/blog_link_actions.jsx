import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteBlog } from '../../actions/blog_actions';

class BlogLinkActions extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.stopPropagation();
        this.props.deleteBlog(this.props.blog.id);
    }

    render() {
        return !this.props.isUserBlogs ? <div></div> : (
            <div>
                <span>Edit</span>
                <span onClick={ this.handleDelete }>Delete</span>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    deleteBlog: id => dispatch(deleteBlog(id))
});

export default connect(null, mapDispatchToProps)(BlogLinkActions);

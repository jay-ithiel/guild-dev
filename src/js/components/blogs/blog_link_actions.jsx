import React from 'react';
import { connect } from 'react-redux';
import { deleteBlog } from '../../actions/blog_actions';

class BlogLinkActions extends React.Component {
    constructor(props) {
        super(props);

        this.redirectToEdit = this.redirectToEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    redirectToEdit(e) {
        e.stopPropagation();
        this.props.history.push(`/blogs/edit/${this.props.blog.id}`);
    }

    handleDelete(e) {
        e.stopPropagation();
        this.props.deleteBlog(this.props.blog.id);
    }

    render() {
        return !this.props.isUserBlogs ? <div></div> : (
            <div id='blog-link-actions' className='flex-between align-center'>
                <span className='blog-link-action' onClick={ this.redirectToEdit }>Edit</span>
                <span className='blog-link-action' onClick={ this.handleDelete }>Delete</span>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    deleteBlog: id => dispatch(deleteBlog(id))
});

export default connect(null, mapDispatchToProps)(BlogLinkActions);

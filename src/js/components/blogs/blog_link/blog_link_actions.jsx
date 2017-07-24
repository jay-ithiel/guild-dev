import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteBlog } from '../../../actions/blog_actions';

import TrashSVG from 'react-icons/lib/fa/trash';
import EditSVG from 'react-icons/lib/fa/edit';
import DeleteBlogButton from './delete_blog_button';
import DeleteBlogModal from './delete_blog_modal';

class BlogLinkActions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDeleteButtonActive: true,
            modalActiveState: false
        };

        this.redirectToEdit = this.redirectToEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.hideModal();
        this.setState({ isDeleteButtonActive: true });
    }

    redirectToEdit(e) {
        e.stopPropagation();
        this.props.history.push(`/blogs/edit/${this.props.blog.id}`);
    }

    handleDelete(e) {
        e.stopPropagation();
        this.props.deleteBlog(this.props.blog.id);
        this.setState({ isDeleteButtonActive: false });
    }

    showModal() {
        $('#blog-delete-modal').fadeIn();
    }

    hideModal() {
        $('#blog-delete-modal').fadeOut();
    }

    render() {
        return !this.props.isUserBlogs ? <div></div> : (
            <div id='blog-link-actions' className='flex-between align-center'>
                <button id='blog-link-action' className='btn margin-top-4' onClick={ this.redirectToEdit }>
                    <EditSVG id='blog-link-svg' className='transition-2s-ease-in' size={24}/>
                </button>

                <button id='blog-link-action' className='btn' onClick={ this.showModal.bind(this) }>
                    <TrashSVG id='blog-link-svg' className='transition-2s-ease-in' size={24}/>
                </button>

                <DeleteBlogModal
                    handleDelete={ this.handleDelete }
                    isDeleteButtonActive={ this.state.isDeleteButtonActive }
                    hideModal={ this.hideModal }/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    deleteBlog: id => dispatch(deleteBlog(id))
});

export default withRouter(connect(null, mapDispatchToProps)(BlogLinkActions));

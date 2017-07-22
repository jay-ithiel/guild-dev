import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteBlog } from '../../../actions/blog_actions';

import EditSVG from 'react-icons/lib/fa/edit';
import TrashSVG from 'react-icons/lib/fa/trash';
import DeleteBlogButton from './delete_blog_button';

class BlogLinkActions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDeleteButtonActive: true
        };

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
        this.setState({ isDeleteButtonActive: false });
    }

    render() {
        return !this.props.isUserBlogs ? <div></div> : (
            <div id='blog-link-actions' className='flex-between align-center'>
                <button id='blog-link-action' className='btn margin-top-4' onClick={ this.redirectToEdit }>
                    <EditSVG id='blog-link-svg' className='transition-2s-ease-in' size={24}/>
                </button>

                <button id='blog-link-action' className='btn' onClick={ this.handleDelete }>
                    <TrashSVG id='blog-link-svg' className='transition-2s-ease-in' size={24}/>
                </button>

            </div>
        );
    }
}
// <button id='blog-link-action' className='btn' onClick={ this.handleDelete }>
//     <TrashSVG id='blog-link-svg' className='transition-2s-ease-in' size={24}/>
// </button>

// <DeleteBlogButton isActive={ this.state.isDeleteButtonActive } handleDelete={ this.handleDelete }/>

const mapDispatchToProps = dispatch => ({
    deleteBlog: id => dispatch(deleteBlog(id))
});

export default withRouter(connect(null, mapDispatchToProps)(BlogLinkActions));

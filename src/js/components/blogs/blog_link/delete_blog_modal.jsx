import React from 'react';
var Loader = require('react-loaders').Loader;

class DeleteBlogModal extends React.Component {
    constructor(props) {
        super(props);
    }

    hideModal() {
        $('#blog-delete-modal').fadeOut();
    }

    render() {
        return (
            <section id='blog-delete-modal' className='modal'>
                <div className='full flex-center'>
                    <div id='blog-delete-modal-content' className='position-relative'>
                        {
                            this.props.isDeleteButtonActive ? (
                                <div>
                                    <p onClick={ this.hideModal } className='close-modal'>x</p>

                                    <h4 className='regular margin-bottom-15'>
                                        Deleting a blog is permanent.
                                        Are you sure you want to delete the blog?
                                    </h4>

                                    <div className='flex-between full-width flex-wrap'>
                                        <button onClick={ this.props.handleDelete } className='btn option-btn confirm-btn regular'>
                                            Delete
                                        </button>

                                        <button onClick={ this.hideModal } className='btn option-btn cancel-btn regular'>
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className='fucker'>
                                    <p className='regular margin-bottom-40'>Deleting. Please wait...</p>
                                    <Loader type="ball-rotate" active/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default DeleteBlogModal;

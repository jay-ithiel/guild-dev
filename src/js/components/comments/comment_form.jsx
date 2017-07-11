import React from 'react';
import { connect } from 'react-redux';
import Comment from '../../../models/comment.ts';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: '',
            blogId: '',
            authorId: ''
        };
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let comment = new Comment(
            this.state.body,
            this.state.blogId,
            this.state.authorId
        );
        console.log('handleSubmit() should dispatch createComment action here');
        // dispatch createComment action
        // this.props.createComment(comment);
    }

    render() {
        return (
            <div id='comment-form-container' className='blog-content'>
                <form onSubmit={ this.handleSubmit }>
                    <textarea
                        id='comment-input'
                        className=''
                        onChange={ this.handleChange('body') }
                        value={ this.state.body }
                        placeholder='Your comment here...'
                    />

                    <button id='submit-comment-btn' className='btn'>
                        Post Comment
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);

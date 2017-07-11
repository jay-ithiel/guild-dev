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
            <div>
                <div className='blog-content desktop'>
                    <form className='comment-form' onSubmit={ this.handleSubmit }>
                        <label className='label'>
                            <h4>COMMENT</h4>
                            <textarea className='comment-input comment-body-input'
                                onChange={ this.handleChange('body') }
                                value={ this.state.body } />
                        </label>

                        <label className='label'>
                            <h4>NAME<span className='required'>*</span></h4>
                            <input type='text'
                                className='comment-input'
                                onChange={ this.handleChange('author_name') }
                                value={ this.state.author_name } />
                        </label>

                        <label className='label'>
                            <h4>EMAIL<span className='required'>*</span></h4>
                            <input type='text'
                                className='comment-input'
                                onChange={ this.handleChange('author_email') }
                                value={ this.state.author_email } />
                        </label>

                        <button className='btn submit-btn'>POST COMMENT</button>
                    </form>
                </div>
            </div>
        );
        //
        // return (
        //     <div id='comment-form-container' className='blog-content'>
        //         <form onSubmit={ this.handleSubmit }>
        //             <textarea
        //                 id='comment-input'
        //                 className=''
        //                 onChange={ this.handleChange('body') }
        //                 value={ this.state.body }
        //                 placeholder='Your comment here...'
        //             />
        //
        //             <button id='submit-comment-btn' className='btn'>
        //                 Post Comment
        //             </button>
        //         </form>
        //     </div>
        // );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);

import React from 'react';
import { withRouter } from 'react-router';
import { isUserSignedIn } from 'blockstack';

import Blog from '../../../../models/blog.ts';

class BlogForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            title: '',
            imageUrl: '',
            body: '',
            authorId: '',
            updatedAt: ''
        };

        this.actionType = (props.history.location.pathname === '/blogs/new/') ? 'Create' : 'Update';
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (!isUserSignedIn()) {
            this.props.history.push('/signin');
        } else {
            this.setState({ authorId: nextProps.currentUser.username });
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.actionType === 'Create') {
            this.state.id = this.props.blogIndex + 1;

            let blog = new Blog(
                this.state.id,
                this.state.title,
                this.state.imageUrl,
                this.state.body,
                this.state.authorId
            );

            this.props.blogs[blog.id] = blog;
        }

        this.props.createBlog(this.props.blogs);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    render() {
        return (
            <div id='blog-form-container'>
                <form id='blog-form' onSubmit={ this.handleSubmit }>
                    <input type='text'
                        id='blog-title-input'
                        className='blog-input'
                        onChange={ this.handleChange('title') }
                        value={ this.state.title }
                        placeholder='Title'
                    />

                    <div id='add-img-btn' className='blog-input btn'>
                        <img id='add-img-icon'
                            src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1499124357/cam-icon_cztsyy.png'
                        />
                        <h4 className='title-2'>Add Image</h4>
                    </div>

                    <textarea type='text'
                        id='blog-body-input'
                        className='blog-input'
                        onChange={ this.handleChange('body') }
                        value={ this.state.body }
                        placeholder='Body'
                    />

                    <button id='blog-submit' className='btn primary-btn blog-input'>{this.actionType} Blog</button>
                </form>
            </div>
        );
    }
}

export default withRouter(BlogForm);

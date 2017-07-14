import React from 'react';
import { withRouter } from 'react-router';
import { isUserSignedIn } from 'blockstack';
import * as blockstack from 'blockstack';
import Blog from '../../../../models/blog.ts';
global.Blog = Blog;
global.blockstack = blockstack;

class BlogForm extends React.Component {
    constructor(props) {
        super(props);

        // check Object.keys(this.props.blogs).length;
        debugger;
        // this.props.blogIndex = Object.keys(this.props.blogs).length;

        this.state = {
            id: this.props.blogIndex,
            title: '',
            imageUrl: '',
            body: '',
            authorId: ''
        };

        this.actionType = (props.history.location.pathname === '/blogs/new/') ? 'Create' : 'Update';
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (!isUserSignedIn()) {
            this.props.history.push('/signin');
        } else {
            this.state.authorId = this.props.currentUser.name;
        }
        // if !props.isNewBlog, dispatch requestBlog to edit
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.actionType === 'Create') {
            let blog = new Blog(
                this.state.id,
                this.state.title,
                this.state.imageUrl,
                this.state.body,
                this.state.authorId
            );

            debugger;
            this.props.blogs[blog.id] = blog;
        }
        // this.props.createBlog(this.state);
        this.props.createBlog(this.props.blogs);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value }) ;
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

import React from 'react';
import { withRouter } from 'react-router';
import { isUserSignedIn } from 'blockstack';
import * as blockstack from 'blockstack';
import * as blockstackStorage from 'blockstack-storage';
import Blog from '../../../../models/blog.ts';
global.Blog = Blog;
global.blockstack = blockstack;
global.blockstackStorage = blockstackStorage;

class BlogForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blog: {
                title: '',
                imageUrl: '',
                body: '',
                authorId: ''
            },
            storageFile: 'blogs.json'
        };

        this.actionType = (props.history.location.pathname === '/blogs/new/') ? 'Create' : 'Update';
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (!isUserSignedIn()) {
            this.props.history.push('/signin');
        }
        // if !props.isNewBlog, dispatch requestBlog to edit
    }

    handleSubmit(e) {
        e.preventDefault();
        // let blog = new Blog(
        //     this.state.blog.title,
        //     this.state.blog.imageUrl,
        //     this.state.blog.body,
        //     this.state.blog.authorId
        // );

        // dispatch createBlog action
        // check props.createBlog and this.state.blog
        debugger;
        this.props.createBlog(this.state.blog);
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

                    <button id='add-img-btn' className='blog-input btn'>
                        <img id='add-img-icon'
                            src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1499124357/cam-icon_cztsyy.png'
                        />
                        <h4 className='title-2'>Add Image</h4>
                    </button>

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

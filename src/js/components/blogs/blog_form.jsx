import React from 'react';
import { withRouter } from 'react-router';
import { isUserSignedIn } from 'blockstack';

class BlogForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authorId: '',
            title: '',
            body: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componendDidMount() {
        if (!isUserSignedIn) {
            this.props.router.history.push('/signin');
        }
    }

    handleSubmit(e) {
        e.preventDefault();

    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value }) ;
    }

    render() {
        return (
            <div id='blog-form-container'>
                <form id='blog-form' onSubmit={ this.handleSubmit }>
                    <input type='text'
                        onChange={ this.handleChange('title') }
                        value={ this.state.title }
                        placeholder='Title'
                    />

                    <button id='add-img-btn' className='btn'>Add Image</button>

                    <input type='text'
                        onChange={ this.handleChange('body') }
                        value={ this.state.body }
                        placeholder='Body'
                    />

                    <button>Post</button>
                </form>
            </div>
        );
    }
}

export default BlogForm;

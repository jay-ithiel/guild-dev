import React from 'react';
import { Link } from 'react-router-dom';
import { parseDateTime, characterLimit } from '../../util/helper_methods.js';

class BlogLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link id='blog-link' to={`/blogs/${this.props.blog.id}`} onClick={ this.forceUpdate }>
                <div className='blog-link-img-box'>
                    <img src={ this.props.blog.imageUrl } alt='Blog Image' className='blog-link-img'/>
                </div>

                <div className='blog-link-info'>
                    <h4 id='blog-link-title'>{ this.props.blog.title }</h4>

                    <p id='blog-link-text'>
                        <strong>Created On:</strong> { parseDateTime(this.props.blog.updatedAt) }
                    </p>

                    <p id='blog-link-text'>
                        <strong>Author:</strong> { this.props.blog.authorId }
                    </p>

                    <div id='blog-link-body-intro'>
                        { characterLimit(this.props.blog.body) }...
                    </div>
                </div>
            </Link>
        );
    }
}

export default BlogLink;

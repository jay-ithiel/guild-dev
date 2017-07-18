import React from 'react';
import { Link } from 'react-router-dom';
import { parseDateTime, characterLimit } from '../../util/helper_methods.js';

const BlogLink = props => (
    <Link id='blog-link' to={`/blogs/${props.blog.id}`}>
        <div className='blog-link-img-box'>
            <img src={ props.blog.imageUrl } alt='Blog Image' className='blog-link-img'/>
        </div>

        <div className='blog-link-info'>
            <h4 id='blog-link-title'>{ props.blog.title }</h4>

            <p id='blog-link-text'>
                <strong>Created On:</strong> { parseDateTime(props.blog.updatedAt) }
            </p>

            <p id='blog-link-text'>
                <strong>Author:</strong> { props.blog.authorId }
            </p>

            <div id='blog-link-body-intro'>
                { characterLimit(props.blog.body) }...
            </div>
        </div>
    </Link>
);

export default BlogLink;

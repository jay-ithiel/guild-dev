import React from 'react';
import { parseDateTime, characterLimit } from '../../util/helper_methods.js';

const BlogLink = ({ blog }) => (
    <div id='blog-link' className=''>
        <div className='blog-link-img-box'>
            <img src={ blog.imageUrl } alt='Blog Image' className='blog-link-img' />
        </div>

        <div className='blog-link-info'>
            <h4 id='blog-link-title'>{ blog.title }</h4>
            
            <p id='blog-link-text'>
                <strong>Created On:</strong> { parseDateTime(blog.updatedAt) }
            </p>

            <p id='blog-link-text'>
                <strong>Author:</strong> { blog.authorId }
            </p>

            <div id='blog-link-body-intro'>
                { characterLimit(blog.body) }...
            </div>
        </div>
    </div>
);

export default BlogLink;

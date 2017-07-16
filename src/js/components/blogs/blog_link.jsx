import React from 'react';
import { parseDateTime } from '../../util/helper_methods.js';

const BlogLink = ({ blog }) => (
    <div id='blog-link' className=''>
        <div className='blog-link-img-box'>
            <img src={ blog.imageUrl } alt='Blog Image' className='blog-link-img' />
        </div>

        <div className='blog-link-info'>
            <h4 id='blog-link-title'>{ blog.title }</h4>
            <span id='blog-link-date'>
                { parseDateTime(blog.updatedAt) }
            </span>
        </div>
    </div>
);

export default BlogLink;

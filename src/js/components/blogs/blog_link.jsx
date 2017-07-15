import React from 'react';

const BlogLink = ({ blog }) => (
    <div id='blog-link' className=''>
        <div className='blog-link-img-box'>
            <img src='' alt='Blog Image' className='blog-link-img' />
        </div>

        <div className='blog-link-info'>{ blog.title }</div>
    </div>
);

export default BlogLink;

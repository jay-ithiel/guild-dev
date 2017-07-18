import React from 'react';
import { Link } from 'react-router-dom';
import { parseDateTime, characterLimit } from '../../util/helper_methods.js';
import BlogLinkActions from './blog_link_actions';

const BlogLink = ({ blog, isUserBlogs }) => (
    <Link id='blog-link' to={`/blogs/${blog.id}`}>
        <div className='blog-link-img-box'>
            <img src={ blog.imageUrl } alt='Blog Image' className='blog-link-img'/>
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

            <BlogLinkActions blog={ blog } isUserBlogs={ isUserBlogs }/>
        </div>
    </Link>
);

export default BlogLink;

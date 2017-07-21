import React from 'react';
import { Link } from 'react-router-dom';
import { parseDateTime, characterLimit } from '../../util/helper_methods.js';
import BlogLinkActions from './blog_link_actions';
import AboutBlog from './about_blog';

// const BlogLink = ({ blog, isUserBlogs }) => (
//     <Link id='blog-link' to={`/blogs/${blog.id}`}>
//         <AboutBlog authorId={ blog.authorId } date={ parseDateTime(blog.updatedAt) }/>
//
//         <div className='blog-link-img-box'
//             style={{ backgroundImage: `url(${blog.imageUrl})` }}>
//         </div>
//
//         <div className='blog-link-info position-relative'>
//             <h4 id='blog-link-title'>{ blog.title }</h4>
//
//             {/*
//             <p id='blog-link-text'>
//                 <strong>Created On:</strong> { parseDateTime(blog.updatedAt) }
//             </p>
//
//             <p id='blog-link-text'>
//                 <strong>Author:</strong> { blog.authorId }
//             </p>
//             */}
//
//             <div id='blog-link-body-intro'>
//                 { blog.blogIntro ? blog.blogIntro : characterLimit(blog.body) }...
//             </div>
//
//             <span className='skinny small letter-space-1 grey dark-hover bold-hover transition-2s-ease-in'>Read more...</span>
//
//             <BlogLinkActions blog={ blog } isUserBlogs={ isUserBlogs }/>
//         </div>
//     </Link>
// );

const BlogLink = ({ blog, isUserBlogs }) => (
    <section id='blog-link' className='position-relative' >
        <Link className='blog-link-info position-relative' to={`/blogs/${blog.id}`}>
            <AboutBlog authorId={ blog.authorId } date={ parseDateTime(blog.updatedAt) }/>

            {
                blog.imageUrl.length === 0 ? <div></div> : (
                    <div className='blog-link-img-box'
                        style={{ backgroundImage: `url(${blog.imageUrl})` }}>
                    </div>
                )
            }

            <h4 id='blog-link-title'>{ blog.title }</h4>

            <div id='blog-link-body-intro'>
                { blog.blogIntro ? blog.blogIntro : characterLimit(blog.body) }...
            </div>

            {
                isUserBlogs ? <div></div> : (
                    <span className='skinny small letter-space-1 grey dark-hover transition-2s-ease-in'>Read more...</span>
                )
            }

        </Link>
        <BlogLinkActions blog={ blog } isUserBlogs={ isUserBlogs }/>
    </section>
);

export default BlogLink;

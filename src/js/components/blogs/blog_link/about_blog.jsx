import React from 'react';
import { loadUserData } from 'blockstack';

const AboutBlog = ({ authorId, authorImageUrl='', date, blog }) => (
    <section id='about-blog'>
        <div id='about-blog-img'
            style={{ backgroundImage: `url(${authorImageUrl})` }}>
        </div>

        <div id='about-blog-info'>
            <span>{authorId}</span>
            <span>{date}</span>
            <span>{blog.title}</span>
        </div>
    </section>
);

export default AboutBlog;

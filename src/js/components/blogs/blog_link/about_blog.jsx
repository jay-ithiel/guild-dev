import React from 'react';
import { loadUserData } from 'blockstack';

const AboutBlog = ({ authorId, authorImageUrl='', date}) => (
    <section id='about-blog'>
        <img id='about-blog-img' src={authorImageUrl}/>
        <div id='about-blog-info'>
            <span>{authorId}</span>
            <span>{date}</span>
        </div>
    </section>
);

export default AboutBlog;

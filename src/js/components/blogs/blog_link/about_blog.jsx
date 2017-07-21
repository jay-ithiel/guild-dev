import React from 'react';

const AboutBlog = ({ authorId, date}) => (
    <section id='about-blog'>
        <div id='about-blog-img'></div>
        <div id='about-blog-info'>
            <span>{authorId}</span>
            <span>{date}</span>
        </div>
    </section>
);

export default AboutBlog;

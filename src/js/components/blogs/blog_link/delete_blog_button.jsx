import React from 'react';
var Loader = require('react-loaders').Loader;

const DeleteBlogButton = ({ isActive, handleDelete }) => {
    return isActive ? (
        <button id='blog-link-action' className='btn' onClick={ handleDelete }>
            <TrashSVG id='blog-link-svg' className='transition-2s-ease-in' size={24}/>
        </button>
    ) : (
        <button id='blog-link-action' className='btn'>
            <Loader type="ball-clip-rotate" active/>
        </button>
    )
}

export default DeleteBlogButton;

import React from 'react';
var Loader = require('react-loaders').Loader;

const DeleteBlogButton = ({ isActive }) => {
    return isActive ? (
        <button id='blog-link-action' className='btn' onClick={ this.handleDelete }>
            <TrashSVG id='blog-link-svg' className='transition-2s-ease-in' size={24}/>
        </button>
    ) : (
        <button id='blog-link-action' className='btn' onClick={ this.handleDelete }>
            <Loader id='blog-link-svg' type="ball-clip-rotate" className='transition-2s-ease-in' size={24}/>
        </button>
    )
}

export default DeleteBlogButton;

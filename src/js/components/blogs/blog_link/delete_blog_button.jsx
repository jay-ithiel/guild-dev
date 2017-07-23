import React from 'react';
import TrashSVG from 'react-icons/lib/fa/trash';
var Loader = require('react-loaders').Loader;

const DeleteBlogButton = ({ isActive, handleDelete }) => {
    return isActive ? (
        <button id='blog-link-action' className='btn' onClick={ handleDelete }>
            <TrashSVG id='blog-link-svg' className='transition-2s-ease-in' size={24}/>
        </button>
    ) : (
        <button id='blog-link-action' className='btn'>
            <TrashSVG id='blog-link-svg' className='transition-2s-ease-in inactive lightgrey-important' size={24}/>
        </button>
    )
}


export default DeleteBlogButton;

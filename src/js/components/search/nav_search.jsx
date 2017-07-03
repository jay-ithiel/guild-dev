import React from 'react';
import SearchModal from './search_modal';

const NavSearch = () => (
  <div id='nav-search' className='border-box-sizing'>
    <img id='search-icon'
        className='btn'
        onClick={ () => $('#search-modal-container').fadeIn() }
        src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1499115986/search-icon_dwgh09.png'
    />

    <SearchModal />
  </div>
);

export default NavSearch;

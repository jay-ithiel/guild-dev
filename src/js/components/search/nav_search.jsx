import React from 'react';
import SearchModal from './search_modal';
import SearchSVG from 'react-icons/lib/fa/search';

const NavSearch = () => (
  <div id='nav-search' className='border-box-sizing'>
    <SearchSVG size={ 21 }
        id='search-icon'
        className='btn'
        onClick={ () => $('#search-modal-container').fadeIn() }
    />

    <SearchModal />
  </div>
);

export default NavSearch;

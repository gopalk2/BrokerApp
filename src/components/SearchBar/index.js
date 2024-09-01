import React from 'react';
import { ReactComponent as SearchIconSVG } from '../../assets/iconSvg/search.svg';
import styles from './style.module.css';

const SearchBar = props => {
  const { searchVal, setSearchVal, handleSearch, className } = props;
  const handleSearchValChange = event => {
    setSearchVal(event.target.value);
  };
  return (
    <div className={`${styles['search-bar']} ${className}`}>
      <input
        type='text'
        placeholder='Search here...'
        value={searchVal}
        onChange={handleSearchValChange}
        className='input-field-text'
      />
      <button onClick={handleSearch}>
        <SearchIconSVG className={styles['search-logo']} />
      </button>
    </div>
  );
};

export default SearchBar;

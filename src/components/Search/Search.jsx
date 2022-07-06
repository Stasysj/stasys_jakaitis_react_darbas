import React from 'react';
import css from './Search.module.css';
function Search() {
  return (
    <>
      <input className={css.search} type='text' placeholder='find skill...' />
      <span>
        <i className={`fa fa-search ${css.icon}`} aria-hidden='true'></i>
      </span>
    </>
  );
}

export default Search;

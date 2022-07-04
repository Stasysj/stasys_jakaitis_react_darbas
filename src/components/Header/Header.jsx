// import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

function Header() {
  return (
    <header className={css.header}>
      <nav>
        <NavLink className={css.navLink} to='/home'>
          Home
        </NavLink>

        <NavLink className={css.navLink} to='/add'>
          Add
        </NavLink>

        <NavLink className={css.navLink} to='/login'>
          Login
        </NavLink>

        <NavLink className={css.navLink} to='/register'>
          Register
        </NavLink>

        <NavLink className={css.navLink} to='/login'>
          Logout
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

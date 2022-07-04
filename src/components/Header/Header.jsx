// import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthCtx } from '../../store/authContext';
import css from './Header.module.css';

function Header() {
  const { isUserLoggedIn, logout } = useAuthCtx();
  console.log(isUserLoggedIn);
  return (
    <header className={css.header}>
      <nav>
        {isUserLoggedIn && (
          <>
            <NavLink className={css.navLink} to='/home'>
              Home
            </NavLink>
            <NavLink className={css.navLink} to='/add'>
              Add
            </NavLink>
            <NavLink onClick={logout} className={css.navLink} to='/login'>
              Logout
            </NavLink>
          </>
        )}

        {!isUserLoggedIn && (
          <>
            <NavLink className={css.navLink} to='/login'>
              Login
            </NavLink>
            <NavLink className={css.navLink} to='/register'>
              Register
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;

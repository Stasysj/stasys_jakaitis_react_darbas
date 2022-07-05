// import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthCtx } from '../../store/authContext';
import css from './Header.module.css';

function Header() {
  const { isUserLoggedIn, logout, activNav } = useAuthCtx();
  console.log(isUserLoggedIn);
  console.log('activNav', activNav);
  return (
    <header className={css.header}>
      <div className={css.img}>
        <img src='logo1.png' alt='' />
      </div>

      <nav>
        {isUserLoggedIn && (
          <>
            <NavLink
              className={activNav !== 'home' ? `${css.navLink}` : `${css.navLinkAktiv}`}
              to='/home'
            >
              Home
            </NavLink>
            <NavLink
              className={activNav !== 'add' ? `${css.navLink}` : `${css.navLinkAktiv}`}
              to='/add'
            >
              Add
            </NavLink>
            <NavLink onClick={logout} className={css.navLink} to='/login'>
              Logout
            </NavLink>
          </>
        )}

        {!isUserLoggedIn && (
          <>
            <NavLink
              className={activNav !== 'login' ? `${css.navLink}` : `${css.navLinkAktiv}`}
              to='/login'
            >
              Login
            </NavLink>
            <NavLink
              className={activNav !== 'register' ? `${css.navLink}` : `${css.navLinkAktiv}`}
              to='/register'
            >
              Register
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;

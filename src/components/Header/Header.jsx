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
            <NavLink className='navLink' to='/'>
              Home
            </NavLink>
            <NavLink className='navLink' to='/add'>
              Add
            </NavLink>
            <NavLink onClick={logout} className='navLink' to='/login'>
              Logout
            </NavLink>
          </>
        )}

        {!isUserLoggedIn && (
          <>
            <NavLink className='navLink' to='/login'>
              Login
            </NavLink>
            <NavLink className='navLink' to='/register'>
              Register
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;

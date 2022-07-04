import React from 'react';
import css from './LoginForm.module.css';

function LoginForm() {
  return (
    <form className={css.form}>
      <h1>Login</h1>
      <input className={css.input} type='email' />
      <input className={css.input} type='password' />
      <button className={css.btn} type='submit'>
        Login
      </button>
    </form>
  );
}

export default LoginForm;

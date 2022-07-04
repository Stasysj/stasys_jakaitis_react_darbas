import React from 'react';
import css from './LoginForm.module.css';

function LoginForm() {
  return (
    <form className={css.form}>
      <h1 className={css.title}>Welcome back,</h1>

      <label className={css.label}>
        <span className={css.span}>Email</span>
        <input className={css.input} type='email' />
      </label>
      <label className={css.label}>
        <span className={css.span}>Password</span>
        <input className={css.input} type='password' />
      </label>
      {/* <input className={css.input} type='email' />
      <input className={css.input} type='password' /> */}
      <p class={css.forgot_pass}>Forgot password?</p>
      <button className={css.btn} type='submit'>
        Login
      </button>
    </form>
  );
}

export default LoginForm;

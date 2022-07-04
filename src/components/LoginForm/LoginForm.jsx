import css from './LoginForm.module.css';
import { useFormik } from 'formik';
import React from 'react';

import * as Yup from 'yup';
import { baseUrl, myFetch } from '../../utils';
import { useAuthCtx } from '../../store/authContext';

// -----------------------------
const initValues = {
  email: 'test@email.com',
  password: '123456',
};
// -------------------------------
function LoginForm() {
  const { login } = useAuthCtx();
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: Yup.object({
      email: Yup.string().email('Patikrinkite savo email').required(),
      password: Yup.string().min(4, 'Maziausiai 4 simboliai').max(7).required(),
    }),
    onSubmit: async (values) => {
      // console.log(baseUrl);
      // console.log('values ===', values);

      const fetchResult = await myFetch(`${baseUrl}/login`, 'POST', values);
      console.log('fetchResulg ===', fetchResult);
      if (fetchResult.msg === 'Successfully logged in') {
        login(fetchResult.token);
      }
    },
  });
  // console.log('formik.values ===', formik.values);
  return (
    <form className={css.form} onSubmit={formik.handleSubmit}>
      <h1 className={css.title}>Welcome back,</h1>

      <label className={css.label}>
        <span className={css.span}>Email</span>
        <input
          type='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={formik.touched.email && formik.errors.email ? css.errorInput : css.input}
          name='email'
          placeholder='Your email'
        />
      </label>
      <p className={css.errorMsg}>{formik.errors.email}</p>
      <label className={css.label}>
        <span className={css.span}>Password</span>
        <input
          type='password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className={formik.touched.password && formik.errors.password ? css.errorInput : css.input}
          name='password'
          placeholder='Your password'
        />
      </label>
      {/* <input className={css.input} type='email' />
      <input className={css.input} type='password' /> */}
      <p className={css.errorMsg}>{formik.errors.password}</p>
      <p className={css.forgot_pass}>Forgot password?</p>
      <button className={css.btn} type='submit'>
        Login
      </button>
    </form>
  );
}

export default LoginForm;

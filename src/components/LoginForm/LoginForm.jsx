import css from './LoginForm.module.css';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';
import { baseUrl, myFetch } from '../../utils';
import { useAuthCtx } from '../../store/authContext';
import { useHistory } from 'react-router-dom';

// -----------------------------
const initValues = {
  email: 'test1@test.lt',
  password: '123456',
};
// -------------------------------
function LoginForm() {
  const { login } = useAuthCtx();
  const history = useHistory();
  const [error, SetError] = useState('');
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: Yup.object({
      email: Yup.string().email('Patikrinkite savo email').required(),
      password: Yup.string().min(4, 'Maziausiai 4 simboliai').max(7).required(),
    }),
    onSubmit: async (values) => {
      SetError('');
      const fetchResult = await myFetch(`${baseUrl}/auth/login`, 'POST', values);
      if (fetchResult.error) {
        SetError(fetchResult.error);
        return;
      }
      login(fetchResult.token);
      if (fetchResult.err) {
        SetError(fetchResult.err);
        return;
      }
      const notify = () =>
        toast.success('Prisijungėte sėkmingai, tuoj būsite peradresuotas į pagrindinį puslapį.', {
          duration: 4000,
          position: 'top-center',
        });

      fetchResult.msg === 'Successfully logged in' &&
        notify() &&
        setTimeout(() => {
          history.replace('/');
        }, 4000);
    },
  });

  return (
    <form className={css.form} onSubmit={formik.handleSubmit}>
      <h1 className={css.title}>Welcome back</h1>
      <Toaster />
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

      <p className={css.errorMsg}>{formik.errors.password}</p>
      {error && <p className={css.errorMsg}>{error}</p>}

      <p className={css.forgot_pass}>Forgot password?</p>
      <button className={css.btn} type='submit'>
        SIGN IN
      </button>
    </form>
  );
}

export default LoginForm;

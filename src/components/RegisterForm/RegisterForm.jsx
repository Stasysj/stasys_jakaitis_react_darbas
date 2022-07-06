import css from './RegisterForm.module.css';
import { useFormik } from 'formik';
import React from 'react';

import * as Yup from 'yup';
import { baseUrl, myFetch } from '../../utils';
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

// -----------------------------
const initValues = {
  email: '',
  password: '',
};
// -------------------------------
function RegisterForm() {
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
      const fetchResult = await myFetch(`${baseUrl}/auth/register`, 'POST', values);
      if (fetchResult.error) {
        SetError(fetchResult.error);
        return;
      }
      if (fetchResult.err) {
        SetError(fetchResult.err);
        return;
      }

      const notify = () =>
        toast.success('Registracija sėkminga,tuoj būsite peradresuoti i Login puslapį.', {
          duration: 4000,
          position: 'top-center',
        });

      fetchResult.changes === 1 &&
        notify() &&
        setTimeout(() => {
          history.replace('/login');
        }, 4000);
    },
  });
  return (
    <form className={css.form} onSubmit={formik.handleSubmit}>
      <Toaster />
      <h1 className={css.title}>Time to feel like home</h1>

      <label className={css.label}>
        <span className={css.span}>Email</span>
        <input
          type='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={formik.touched.email && formik.errors.email ? css.errorInput : css.input}
          name='email'
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
        />
      </label>
      <p className={css.errorMsg}>{formik.errors.password}</p>
      {error && <p className={css.errorMsg}>{error}</p>}
      <button className={css.btn} type='submit'>
        SIGN UP
      </button>
    </form>
  );
}

export default RegisterForm;

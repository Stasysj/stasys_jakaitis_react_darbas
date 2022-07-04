import css from './AddForm.module.css';
import { useFormik } from 'formik';
import React from 'react';

import * as Yup from 'yup';
import { baseUrl, myFetch, myFetchAuth } from '../../utils';
import { useAuthCtx } from '../../store/authContext';

// -----------------------------
const initValues = {
  title: '',
  description: '',
};
// -------------------------------
function AddForm() {
  const { token } = useAuthCtx();
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: Yup.object({
      title: Yup.string().min(4, 'Maziausiai 4 simboliai').max(10).required(),
      description: Yup.string().min(4, 'Maziausiai 4 simboliai').max(50).required(),
    }),
    onSubmit: async (values) => {
      // console.log(baseUrl);
      // console.log('values ===', values);

      const fetchResult = await myFetchAuth(`${baseUrl}/content/skills`, token, values);
      console.log('fetchResult ===', fetchResult);
      //   if (fetchResult.err) {
      //     console.log('klaida===', fetchResult.err);
      //     return;
      //   }
      //   login(fetchResult.token);
    },
  });
  // console.log('formik.values ===', formik.values);
  return (
    <form className={css.form} onSubmit={formik.handleSubmit}>
      <h1 className={css.title}>Add skills</h1>

      <label className={css.label}>
        <span className={css.span}>Title</span>
        <input
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          className={formik.touched.title && formik.errors.title ? css.errorInput : css.input}
          name='title'
        />
      </label>
      <p className={css.errorMsg}>{formik.errors.title}</p>
      <label className={css.label}>
        <span className={css.span}>Description</span>
        <textarea
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          className={
            formik.touched.description && formik.errors.description ? css.errorInput : css.input
          }
          name='description'
        />
      </label>
      {/* <input className={css.input} type='email' />
      <input className={css.input} type='password' /> */}
      <p className={css.errorMsg}>{formik.errors.description}</p>
      {/* <p className={css.forgot_pass}>Forgot password?</p> */}
      <button className={css.btn} type='submit'>
        Add
      </button>
    </form>
  );
}

export default AddForm;

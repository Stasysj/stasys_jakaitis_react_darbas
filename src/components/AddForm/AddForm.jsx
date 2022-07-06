import css from './AddForm.module.css';
import { useFormik } from 'formik';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';
import { baseUrl, myFetchAuth } from '../../utils';
import { useAuthCtx } from '../../store/authContext';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

// -----------------------------
const initValues = {
  title: '',
  description: '',
};
// -------------------------------
function AddForm() {
  const { token } = useAuthCtx();
  const history = useHistory();
  const [error, SetError] = useState('');
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: Yup.object({
      title: Yup.string().min(4, 'Maziausiai 4 simboliai').max(10).required(),
      description: Yup.string().min(4, 'Maziausiai 4 simboliai').max(50).required(),
    }),
    onSubmit: async (values) => {
      SetError('');
      const fetchResult = await myFetchAuth(`${baseUrl}/content/skills`, token, values);
      if (fetchResult.error) {
        SetError(fetchResult.error);
        return;
      }
      // ------------------------------
      toast.success('Įrašas sėkmingai pridetas, tuoj busite peradresuoti i pagridinį puslapį.', {
        duration: 4000,
        position: 'top-center',
      });

      setTimeout(() => {
        history.replace('/');
      }, 4000);
    },
  });
  // ---------------------------
  return (
    <form className={css.form} onSubmit={formik.handleSubmit}>
      <h1 className={css.title}>Add...</h1>
      <Toaster />
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
      <p className={css.errorMsg}>{formik.errors.description}</p>
      {error && <p className={css.errorMsg}>{error}</p>}
      <button className={css.btn} type='submit'>
        Add
      </button>
    </form>
  );
}

export default AddForm;

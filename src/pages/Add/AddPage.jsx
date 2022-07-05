import React from 'react';
import AddForm from '../../components/AddForm/AddForm';
import { useAuthCtx } from '../../store/authContext';

function AddPage() {
  const { setNav } = useAuthCtx();
  setNav('add');
  return (
    <div className='container'>
      <div className='container_form_add'>
        <AddForm />
      </div>

      <div className='container_img_full'></div>
    </div>
  );
}

export default AddPage;

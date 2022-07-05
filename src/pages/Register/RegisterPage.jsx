import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { useAuthCtx } from '../../store/authContext';

function RegisterPage() {
  const { setNav } = useAuthCtx();
  setNav('register');
  return (
    <div className='container'>
      <div className='container_img'></div>
      <div className='container_form'>
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;

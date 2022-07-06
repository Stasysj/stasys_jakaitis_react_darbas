import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useAuthCtx } from '../../store/authContext';

function LoginPage() {
  // const { setNav } = useAuthCtx();
  // setNav('login');
  return (
    <div className='container'>
      <div className='container_form'>
        <LoginForm />
      </div>

      <div className='container_img'></div>
    </div>
  );
}

export default LoginPage;

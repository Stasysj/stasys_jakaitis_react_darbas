import React from 'react';
import CardList from '../../components/CardList/CardList';
import { useAuthCtx } from '../../store/authContext';

function HomePage() {
  const { setNav } = useAuthCtx();
  setNav('home');
  return (
    <div className='container_home'>
      <CardList />
    </div>
  );
}

export default HomePage;

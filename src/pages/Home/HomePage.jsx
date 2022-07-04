import React from 'react';
import CardList from '../../components/Card/CardList';

function HomePage() {
  return (
    <div className='container'>
      <div className='container_form_add'>
        <CardList />
      </div>

      {/* <div className='container_img_full'></div> */}
    </div>
  );
}

export default HomePage;

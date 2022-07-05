import React from 'react';
import { Link } from 'react-router-dom';

function Page() {
  return (
    <>
      <h2>Jus neprisujungęs...</h2>

      <Link to={'/login'}>Prisijungti čia...</Link>
    </>
  );
}

export default Page;

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthCtx } from '../../store/authContext';
import { baseUrl, getFetchAuth } from '../../utils';
import Card from './Card';

function CardList() {
  const { token } = useAuthCtx();
  const [skills, setSkills] = useState([]);
  console.log('token', token);

  const getSkills = async () => {
    const fetchResult = await getFetchAuth(`${baseUrl}/content/skills`, token);
    console.log('fetchResult ===', fetchResult);
    if (Array.isArray(fetchResult)) {
      setSkills(fetchResult);
    }
  };

  useEffect(() => {
    if (token) getSkills();
  }, []);
  return (
    <div>
      <h1>Skills list:</h1>
      {skills.map((skObj) => (
        <Card key={skObj.id} {...skObj} />
      ))}
    </div>
  );
}

export default CardList;

import React from 'react';
import css from './CardList.module.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthCtx } from '../../store/authContext';
import { baseUrl, getFetchAuth } from '../../utils';
import Card from '../Card/Card';

function CardList() {
  const { token } = useAuthCtx();
  const [skills, setSkills] = useState([]);
  console.log('token', token);

  const getSkills = async () => {
    const fetchResult = await getFetchAuth(`${baseUrl}/content/skills`, token);
    // console.log('fetchResult ===', fetchResult);
    if (Array.isArray(fetchResult)) {
      setSkills(fetchResult);
    }
  };

  useEffect(() => {
    if (token) getSkills();
  }, []);
  return (
    <div className={css.cardList}>
      <h1>Skills list:</h1>
      <div className={css.card_container}>
        {skills.length > 0 ? (
          skills.map((skObj) => <Card key={skObj.id} {...skObj} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}

export default CardList;

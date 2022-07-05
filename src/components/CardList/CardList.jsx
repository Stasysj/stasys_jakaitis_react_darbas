import React from 'react';
import css from './CardList.module.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthCtx } from '../../store/authContext';
import { baseUrl, getFetchAuth } from '../../utils';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

function CardList() {
  const { token } = useAuthCtx();
  const [skills, setSkills] = useState('');
  const [error, setError] = useState('');
  // const [data, setData] = useState(false);

  console.log('token', token);

  const getSkills = async () => {
    const fetchResult = await getFetchAuth(`${baseUrl}/content/skills`, token);
    console.log('fetchResult ===', fetchResult);
    if (Array.isArray(fetchResult)) {
      setSkills(fetchResult);
      setError('');
    } else {
      setError(fetchResult.error);
    }
  };

  useEffect(() => {
    if (token) getSkills();
  }, []);
  return (
    <div className={css.cardList}>
      <h1 className={css.title}>Skills:</h1>

      <div className={css.card_container}>
        {error ? (
          <h1>{error}</h1>
        ) : skills.length === 0 ? (
          <h1>Lauding...</h1>
        ) : (
          skills.length > 0 && skills.map((skObj) => <Card key={skObj.id} {...skObj} />)
        )}
      </div>
    </div>
  );
}

export default CardList;

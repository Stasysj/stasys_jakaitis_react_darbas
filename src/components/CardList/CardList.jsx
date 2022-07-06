import React from 'react';
import css from './CardList.module.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthCtx } from '../../store/authContext';
import { baseUrl, getFetchAuth } from '../../utils';
import Card from '../Card/Card';

const filterSkills = (searchText, duomenuMasyvas) => {
  if (!searchText) {
    return duomenuMasyvas;
  }
  return duomenuMasyvas.filter(({ title }) =>
    title.toLowerCase().includes(searchText.toLowerCase())
  );
};

function CardList() {
  const { token } = useAuthCtx();
  const [skills, setSkills] = useState('');
  const [filt, setFilt] = useState([]);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // console.log('token', token);

  const getSkills = async () => {
    const fetchResult = await getFetchAuth(`${baseUrl}/content/skills`, token);
    console.log('fetchResult ===', fetchResult);
    if (Array.isArray(fetchResult)) {
      setSkills(fetchResult);
      setFilt(fetchResult);
      setError('');
    } else {
      setError(fetchResult.error);
    }
  };

  useEffect(() => {
    if (token) getSkills();
  }, []);

  useEffect(() => {
    const filteredSkills = filterSkills(searchTerm, skills);
    setFilt(filteredSkills);
  }, [searchTerm]);

  return (
    <div className={css.cardList}>
      <h1 className={css.title}>Sąrašas:</h1>
      <>
        <span>
          <i className={`fa fa-search ${css.icon}`} aria-hidden='true'></i>
        </span>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          className={css.search}
          type='text'
          placeholder='Find...'
        />
      </>

      <div className={css.card_container}>
        {!filt ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>{error}</h1>
        ) : filt.length === 0 ? (
          <h1>Sąrašas tuščias.</h1>
        ) : (
          filt.length > 0 && filt.map((skObj) => <Card key={skObj.id} {...skObj} />)
        )}
      </div>
    </div>
  );
}

export default CardList;

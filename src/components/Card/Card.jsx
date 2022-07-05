import React from 'react';
import css from './Card.module.css';

function Card({ title, description }) {
  return (
    <div className={css.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;

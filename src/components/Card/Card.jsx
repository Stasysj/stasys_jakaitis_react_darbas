import React from 'react';
import css from './Card.module.css';

function Card({ title, description }) {
  return (
    <div className={css.card}>
      <h3 className={css.title}>{title}</h3>
      <div className={css.line}></div>
      <p className={css.description}>{description}</p>
    </div>
  );
}

export default Card;

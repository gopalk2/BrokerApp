import React from 'react';
import './style.css';

const Card = props => {
  return <div className={`card-div ${props.className}`}>{props.children}</div>;
};

export default Card;

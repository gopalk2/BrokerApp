import React from 'react';
import './style.css';

const NameLogo = props => {
  const { label, className } = props;
  const name = label
    .split(' ')
    .map(word => word[0].toUpperCase())
    .join('');
  return <div className={`name-logo ${className}`}>{name}</div>;
};

export default NameLogo;

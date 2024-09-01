import React from 'react';
import './style.css';

const OuterCard = props => {
  return (
    <div className={`outer-card ${props.className ? props.className : ''}`}>
      {props.children}
    </div>
  );
};

export default OuterCard;

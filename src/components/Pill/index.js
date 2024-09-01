import React from 'react';
import './style.css';

const Pill = props => {
  const { value, color, shape, className } = props;
  const defaultShape = shape || 'round';
  return (
    <span
      className={`pill-div ${defaultShape} ${className}`}
      style={{
        backgroundColor: `${color}1A`,
        color: color
      }}
    >
      {value}
    </span>
  );
};

export default Pill;

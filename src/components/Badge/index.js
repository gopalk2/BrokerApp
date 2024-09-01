import React from 'react';
import './style.css';

const Badge = props => {

  const { label, variant, className, color, icon } = props;
  const labelVariant = variant || 'basic-grey';
  
  return (
    <div
      className={`user-badge ${labelVariant} ${className ? className : ''}`}
      style={color && { color: color, backgroundColor: `${color}1a` }}
    >
      {icon} {label}
    </div>
  );
};

export default Badge;

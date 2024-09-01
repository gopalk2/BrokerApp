import React from 'react';
import './style.css';

const InputFilterSection = props => {
  const { value, placeholder, type, onChange, className } = props;
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`filter-section-input ${className}`}
    />
  );
};

export default InputFilterSection;

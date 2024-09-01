import React from 'react';
import './style.css';

const Checkbox = props => {
  const { label, id, checked, onChange, className, checkboxColor } = props;

  const handleCheckboxChange = () => {
    onChange(id);
    // onChange(label);
  };

  return (
    <label className={`body-sm div-space-start ${className}`}>
      <input
        type='checkbox'
        checked={checked}
        onChange={handleCheckboxChange}
        className={
          checkboxColor ? `checkbox-input ${checkboxColor}` : 'checkbox-input'
        }
      />
      <span
        className={
          checkboxColor ? `checkbox-label ${checkboxColor}` : 'checkbox-label'
        }
      >
        {label}
      </span>
    </label>
  );
};

export default Checkbox;

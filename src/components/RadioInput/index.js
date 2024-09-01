import React from 'react';

const RadioInput = props => {
  const { value, name, label, onChange, className, checked } = props;

  const handleChange = () => {
    onChange(label);
  };

  return (
    <label className={`body-sm  div-space-between ${className}`}>
      <input
        type='radio'
        value={value}
        name={name}
        checked={checked}
        className='custom-radio'
        onChange={handleChange}
      />

      <span className='ml-2'>{label}</span>
    </label>
  );
};

export default RadioInput;

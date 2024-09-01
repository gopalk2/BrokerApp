import React, { useState } from 'react';

const Slider = props => {
  const { min, max, step, onChange } = props;

  const [startValue, setStartValue] = useState(min);
  const [endValue, setEndValue] = useState(max);

  const handleStartChange = event => {
    const newValue = parseInt(event.target.value, 10);
    setStartValue(newValue);
    onChange(newValue, endValue);
  };

  const handleEndChange = event => {
    const newValue = parseInt(event.target.value, 10);
    setEndValue(newValue);
    onChange(startValue, newValue);
  };

  return (
    <div>
      <input
        type='range'
        min={min}
        max={max}
        step={step}
        value={startValue}
        onChange={handleStartChange}
      />
      <input
        type='range'
        min={min}
        max={max}
        step={step}
        value={endValue}
        onChange={handleEndChange}
      />
      <span>{startValue}</span> - <span>{endValue}</span>
    </div>
  );
};

export default Slider;

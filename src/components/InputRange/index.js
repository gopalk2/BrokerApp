import React, { useState } from 'react';
import styles from './style.module.css';

const InputRange = props => {
  const { min, max, defaultValue } = props;
  const [fromValue, setFromValue] = useState(min);
  const [toValue, setToValue] = useState(max);

  const handleFromChange = event => {
    const newValue = parseInt(event.target.value);
    setFromValue(newValue);
    if (newValue > toValue) {
      setToValue(newValue);
    }
  };

  const handleToChange = event => {
    const newValue = parseInt(event.target.value);
    setToValue(newValue);
    if (newValue < fromValue) {
      setFromValue(newValue);
    }
  };

  return (
    <div className={styles['range-container']}>
      <div className={styles['sliders-control']}>
        <input
          type='range'
          defaultValue={defaultValue}
          min={min}
          max={max}
          id='fromSlider'
          onChange={handleFromChange}
          className={styles.range}
        />
        <input
          type='range'
          defaultValue={defaultValue}
          min={min}
          max={max}
          id='toSlider'
          onChange={handleToChange}
          className={styles.range}
        />
      </div>
      <div className={styles['form-control']}>
        <div className={styles['form-control']}>
          <span className='body-md'>{fromValue}</span>
        </div>
        <div className={styles['form-control']}>
          <span className='body-md'>{toValue}</span>
        </div>
      </div>
    </div>
  );
};

export default InputRange;

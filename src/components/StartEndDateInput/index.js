import React, { useState } from 'react';
import styles from './style.module.css';

const StartEndDateInput = props => {
  const today = new Date().toISOString().slice(0, 10);
  const [dateError, setDateError] = useState('');

  const { startDate, endDate, getStartDate, getEndDate } = props;

  const handleStartDateChange = e => {
    const selectedStartDate = e.target.value;
    if (selectedStartDate > endDate) {
      setDateError('Start date should be less than or equal to end date');
    } else {
      setDateError('');
      getStartDate(selectedStartDate);
    }
  };

  const handleEndDateChange = e => {
    const selectedEndDate = e.target.value;
    if (selectedEndDate < startDate) {
      setDateError('End date should be greater than or equal to From date');
    } else {
      setDateError('');
      getEndDate(selectedEndDate);
    }
  };

  return (
    <>
      <div className='div-space-between w-100 mt-2 mb-2'>
        <input
          type='date'
          id='startDate'
          value={startDate}
          onChange={handleStartDateChange}
          className={styles['date-picker']}
          max={today}
        />
        <input
          type='date'
          id='endDate'
          value={endDate}
          onChange={handleEndDateChange}
          className={styles['date-picker']}
          max={today}
        />
      </div>
      {dateError && <span className='error-text'>{dateError}</span>}
    </>
  );
};

export default StartEndDateInput;

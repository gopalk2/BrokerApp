import React, { useState } from 'react';
import styles from './style.module.css';

const AmenityBox = props => {
  const { label } = props;
  const [activeButton, setActiveButton] = useState(false);

  const handleClickButton = () => {
    setActiveButton(!activeButton);
  };

  return (
    <div className={styles['amenity-box-container']}>
      <div
        onClick={handleClickButton}
        className={
          activeButton
            ? `${styles['on-active']} ${styles['content-div']}`
            : `${styles['on-inactive']} ${styles['content-div']}`
        }
      >
        <div className={`amenityContent`}>{label}</div>
      </div>
    </div>
  );
};

export default AmenityBox;

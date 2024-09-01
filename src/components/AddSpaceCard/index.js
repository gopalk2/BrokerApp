import React from 'react';
import styles from './style.module.css';

const AddSpaceCard = props => {
  const { icon, label, subLabel, onClick, disabled } = props;

  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <div
      className={`${styles['add-space-card']} mb-3 ${
        disabled ? styles['disabled'] : ''
      } `}
      onClick={handleClick}
    >
      <div className={`div-center mb-2`}>
        <div className={styles['circle']}>{icon}</div>
      </div>
      {label && (
        <div className={`div-center`}>
          <p className={styles['space-type']}>{label}</p>
        </div>
      )}
      {subLabel && (
        <div className={`div-center`}>
          <p className={styles['sub-space-type']}>{subLabel}</p>
        </div>
      )}
    </div>
  );
};

export default AddSpaceCard;

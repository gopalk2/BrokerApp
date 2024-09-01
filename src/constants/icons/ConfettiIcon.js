import React from 'react';
import { ReactComponent as ConfettiIconSVG } from '../../assets/icons/confettiOutline.svg';
import styles from '../styles.module.css';

const ConfettiIcon = ({ className }) => {
  return (
    <ConfettiIconSVG
      className={className ? className : styles['activity-icon']}
    />
  );
};

export default ConfettiIcon;

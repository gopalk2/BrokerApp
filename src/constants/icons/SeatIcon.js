import React from 'react';
import { ReactComponent as SeatIconSVG } from '../../assets/icons/seatIcon.svg';
import styles from '../styles.module.css';

const SeatIcon = ({ className }) => {
  return <SeatIconSVG className={`${styles['seat-icon']} ${className}`} />;
};

export default SeatIcon;

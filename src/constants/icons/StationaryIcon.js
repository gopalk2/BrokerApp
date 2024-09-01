import React from 'react';
import { ReactComponent as StationaryIconSVG } from '../../assets/icons/stationaryIcon.svg';
import styles from '../styles.module.css';

const StationaryIcon = () => {
  return <StationaryIconSVG className={styles['stationary-icon']} />;
};

export default StationaryIcon;

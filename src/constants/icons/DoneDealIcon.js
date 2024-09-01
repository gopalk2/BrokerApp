import React from 'react';
import { ReactComponent as DealDoneIconSVG } from '../../assets/icons/doneDealIcon.svg';
import styles from '../styles.module.css';

const DoneDealIcon = () => {
  return <DealDoneIconSVG className={styles['done-deal-icon']} />;
};

export default DoneDealIcon;

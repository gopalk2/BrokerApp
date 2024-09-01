import React from 'react';
import { ReactComponent as ShieldCheckIconSVG } from '../../assets/icons/shieldCheck.svg';
import styles from '../styles.module.css';

const ShieldCheckIcon = () => {
  return <ShieldCheckIconSVG className={styles['shield-icon']} />;
};

export default ShieldCheckIcon;

import React from 'react';
import { ReactComponent as GoogleIconSVG } from '../../assets/icons/googleIcon.svg';
import styles from '../styles.module.css';

const GoogleIcon = () => {
  return <GoogleIconSVG className={styles['google-icon']} />;
};

export default GoogleIcon;

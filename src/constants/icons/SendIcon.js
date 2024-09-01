import React from 'react';
import { ReactComponent as SendIconSVG } from '../../assets/icons/sendicon.svg';
import styles from '../styles.module.css';

const SendIcon = () => {
  return <SendIconSVG className={styles['send-icon']} />;
};

export default SendIcon;

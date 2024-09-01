import React from 'react';
import { ReactComponent as TwitterIconSVG } from '../../assets/icons/twitterIcon.svg';
import styles from '../styles.module.css';

const TwitterIcon = () => {
  return <TwitterIconSVG className={styles['twitter-icon']} />;
};

export default TwitterIcon;

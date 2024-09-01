import React from 'react';
import { ReactComponent as StarIconSVG } from '../../assets/icons/starIcon.svg';
import styles from '../styles.module.css';

const StarIcon = () => {
  return <StarIconSVG className={styles['star-icon']} />;
};

export default StarIcon;

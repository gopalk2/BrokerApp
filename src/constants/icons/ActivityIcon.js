import React from 'react';
import { ReactComponent as ActivityIconSVG } from '../../assets/icons/activity.svg';
import styles from '../styles.module.css';

const ActivityIcon = () => {
  return <ActivityIconSVG className={styles['activity-icon']} />;
};

export default ActivityIcon;

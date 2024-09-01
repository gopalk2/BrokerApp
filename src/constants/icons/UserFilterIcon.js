import React from 'react';
import { ReactComponent as UserFilterIconSVG } from '../../assets/icons/userFilter.svg';
import styles from '../styles.module.css';

const UserFilterIcon = () => {
  return <UserFilterIconSVG className={styles['user-filter-icon']} />;
};

export default UserFilterIcon;

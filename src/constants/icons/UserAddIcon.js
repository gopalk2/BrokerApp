import React from 'react';
import { ReactComponent as UserAddIconSVG } from '../../assets/icons/AddUserIcon.svg';
import styles from '../styles.module.css';

const UserAddIcon = props => {
  const { className, size } = props;
  return <UserAddIconSVG className={`${className} ${styles[size]}`} />;
};

export default UserAddIcon;

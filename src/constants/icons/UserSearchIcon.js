import React from 'react';
import { ReactComponent as UserSearchIconSVG } from '../../assets/icons/SearchUserIcon.svg';
import styles from '../styles.module.css';

const UserSearchIcon = props => {
  const { className, size } = props;
  return <UserSearchIconSVG className={`${className} ${styles[size]}`} />;
};

export default UserSearchIcon;

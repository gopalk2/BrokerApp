import React from 'react';
import { ReactComponent as SpaceSearchIconSVG } from '../../assets/icons/SearchSpaceIcon.svg';
import styles from '../styles.module.css';

const SpaceSearchIcon = props => {
  const { className, size } = props;
  return <SpaceSearchIconSVG className={`${className} ${styles[size]}`} />;
};

export default SpaceSearchIcon;

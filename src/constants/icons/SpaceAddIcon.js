import React from 'react';
import { ReactComponent as SpaceAddIconSVG } from '../../assets/icons/AddSpaceIcon.svg';
import styles from '../styles.module.css';

const SpaceAddIcon = props => {
  const { className, size } = props;
  return <SpaceAddIconSVG className={`${className} ${styles[size]}`} />;
};

export default SpaceAddIcon;

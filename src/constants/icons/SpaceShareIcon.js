import React from 'react';
import { ReactComponent as SpaceShareIconSVG } from '../../assets/icons/SpaceShareIcon.svg';
import styles from '../styles.module.css';

const SpaceShareIcon = ({ className }) => {
  return (
    <SpaceShareIconSVG
      className={`${styles['space-share-icon']} ${className}`}
    />
  );
};

export default SpaceShareIcon;

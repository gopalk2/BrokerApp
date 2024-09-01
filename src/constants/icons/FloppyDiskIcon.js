import React from 'react';
import { ReactComponent as FloppyDiskIconSVG } from '../../assets/icons/floppyDiskIcon.svg';
import styles from '../styles.module.css';

const FloppyDiskIcon = ({ className }) => {
  
  return (
    <FloppyDiskIconSVG className={`${styles['floppy-icon']} ${className}`} />
  );
};

export default FloppyDiskIcon;

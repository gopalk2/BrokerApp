import React from 'react';
import { ReactComponent as ZoomMapIconSVG } from '../../assets/icons/zoomOutIcon.svg';
import styles from '../styles.module.css';

const ZoomMapIcon = ({ className }) => {
  return <ZoomMapIconSVG className={`${styles['zoom-icon']} ${className}`} />;
};

export default ZoomMapIcon;

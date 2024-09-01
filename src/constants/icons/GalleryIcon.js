import React from 'react';
import { ReactComponent as GalleryIconSVG } from '../../assets/icons/galleryIcon.svg';
import styles from '../styles.module.css';

const GalleryIcon = () => {
  return <GalleryIconSVG className={styles['gallery-icon']} />;
};

export default GalleryIcon;

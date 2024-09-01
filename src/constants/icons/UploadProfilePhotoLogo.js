import React from 'react';
import { ReactComponent as UploadProfilePhotoLogoSVG } from '../../assets/icons/uploadProfileImageLogo.svg';
import styles from '../styles.module.css';

const UploadProfilePhotoLogo = props => {
  const { className, size } = props;
  return (
    <UploadProfilePhotoLogoSVG className={`${className} ${styles[size]}`} />
  );
};

export default UploadProfilePhotoLogo;

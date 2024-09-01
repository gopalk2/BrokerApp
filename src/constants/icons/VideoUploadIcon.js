import React from 'react';
import { ReactComponent as VideoUploadIconVG } from '../../assets/icons/videoUploadIcon.svg';
import styles from '../styles.module.css';

const VideoUploadIcon = ({ className }) => {
  return (
    <VideoUploadIconVG
      className={`${styles['video-upload-icon']} ${className}`}
    />
  );
};

export default VideoUploadIcon;

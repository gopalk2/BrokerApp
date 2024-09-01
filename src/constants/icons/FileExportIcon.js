import React from 'react';
import { ReactComponent as FileExportIconSVG } from '../../assets/icons/FileExportIcon.svg';
import styles from '../styles.module.css';

const FileExportIcon = () => {
  return <FileExportIconSVG className={styles['file-export-icon']} />;
};

export default FileExportIcon;

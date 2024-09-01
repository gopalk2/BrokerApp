import React from 'react';
import { ReactComponent as ExcelFileIconSVG } from '../../assets/icons/excelFile.svg';
import styles from '../styles.module.css';

const ExcelFileIcon = () => {
  return <ExcelFileIconSVG className={styles['excel-file-icon']} />;
};

export default ExcelFileIcon;

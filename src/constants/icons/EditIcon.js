import React from 'react';
import { ReactComponent as EditIconSVG } from '../../assets/icons/edit.svg';
import styles from '../styles.module.css';

const EditIcon = () => {
  return <EditIconSVG className={styles['edit-icon']} />;
};

export default EditIcon;

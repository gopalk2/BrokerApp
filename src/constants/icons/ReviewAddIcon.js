import React from 'react';
import { ReactComponent as ReviewAddIconSVG } from '../../assets/icons/reviewAddIcon.svg';
import styles from '../styles.module.css';

const ReviewAddIcon = className => {
  return (
    <ReviewAddIconSVG className={`${styles['review-add-icon']} ${className}`} />
  );
};

export default ReviewAddIcon;

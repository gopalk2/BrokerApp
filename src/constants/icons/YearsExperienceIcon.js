import React from 'react';
import { ReactComponent as YearsExperienceIconSVG } from '../../assets/icons/yearsExperience.svg';
import styles from '../styles.module.css';

const YearsExperienceIcon = ({ className }) => {
  return (
    <YearsExperienceIconSVG
      className={`${styles['year-experience']} ${className}`}
    />
  );
};

export default YearsExperienceIcon;

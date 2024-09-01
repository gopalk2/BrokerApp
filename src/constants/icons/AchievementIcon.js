import React from 'react';
import { ReactComponent as AchievementIconSVG } from '../../assets/icons/achievementIcon.svg';
import styles from '../styles.module.css';

const AchievementIcon = ({ className }) => {
  return (
    <AchievementIconSVG
      className={`${styles['year-experience']} ${className}`}
    />
  );
};

export default AchievementIcon;

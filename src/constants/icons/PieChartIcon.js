import React from 'react';
import { ReactComponent as PieChartIconSVG } from '../../assets/icons/pieChart.svg';
import styles from '../styles.module.css';

const PieChartIcon = () => {
  return <PieChartIconSVG className={styles['pie-chart-icon']} />;
};

export default PieChartIcon;

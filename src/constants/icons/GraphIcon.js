import React from 'react';
import { ReactComponent as GraphIconSVG } from '../../assets/icons/graphIcon.svg';
import styles from '../styles.module.css';

const GraphIcon = () => {
  return <GraphIconSVG className={styles['graph-icon']} />;
};

export default GraphIcon;

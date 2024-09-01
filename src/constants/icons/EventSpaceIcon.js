import React from 'react';
import { ReactComponent as EventSpaceIconSVG } from '../../assets/icons/eventSpace.svg';
import styles from '../styles.module.css';

const EventSpaceIcon = () => {
  return <EventSpaceIconSVG className={styles['event-space']} />;
};

export default EventSpaceIcon;

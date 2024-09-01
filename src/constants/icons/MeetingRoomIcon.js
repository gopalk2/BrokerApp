import React from 'react';
import { ReactComponent as MeetingRoomIconSVG } from '../../assets/icons/meetingRoom.svg';
import styles from '../styles.module.css';

const MeetingRoomIcon = () => {
  return <MeetingRoomIconSVG className={styles['meeting-room']} />;
};

export default MeetingRoomIcon;

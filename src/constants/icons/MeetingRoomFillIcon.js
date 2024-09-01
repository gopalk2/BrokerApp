import React from 'react';
import { ReactComponent as MeetingRoomFillIconGVG } from '../../assets/icons/meetingRoomFillIcon.svg';
import styles from '../styles.module.css';

const MeetingRoomFillIcon = () => {
  return <MeetingRoomFillIconGVG className={styles['meeting-room']} />;
};

export default MeetingRoomFillIcon;

import React from 'react';
import { ReactComponent as ChatSVG } from '../../assets/icons/chat.svg';
import styles from '../styles.module.css';

const ChatMessageIcon = () => {
  return <ChatSVG className={styles['chat-icon']} />;
};

export default ChatMessageIcon;

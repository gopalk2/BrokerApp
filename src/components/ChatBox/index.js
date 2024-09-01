import React from 'react';
import { ReactComponent as ThreeDotsIconSVG } from '../../assets/iconSvg/vertical_ellipsis.svg';
import SendIcon from '../../constants/icons/SendIcon';
import {
  formatDateAndTime,
  dateFormatterToUserFormat
} from '../../utils/formatters';
import styles from './styles.module.css';

const ChatBox = props => {
  const { inputValue, handleInputChange, chatMessages, handleSendMessage } =
    props;

  return (
    <div className={styles['chat-box']}>
      <div className={styles['message-container']}>
        {chatMessages.map(chat => {
          return (
            <div key={chat.date}>
              <div className='w-100 div-center'>
                <p className={`m-0 ${styles['date-header']}`}>
                  {dateFormatterToUserFormat(chat.date)}
                </p>
              </div>
              {chat.messages.map(message => {
                const { formattedTime } = formatDateAndTime(
                  message.date,
                  false
                );
                return (
                  <div
                    key={message.id}
                    className={`w-100 ${
                      message.author === 'You'
                        ? 'div-space-end'
                        : 'div-space-start'
                    }`}
                  >
                    <div
                      className={`${styles['message']} ${
                        message.author === 'You'
                          ? styles['sent']
                          : styles['received']
                      } `}
                    >
                      <div className='div-space-between'>
                        <p className='m-0 link-sm'>{message.author}</p>
                        <span>
                          <ThreeDotsIconSVG
                            className={styles['three-dot-icon']}
                          />
                        </span>
                      </div>
                      <div className='body-sm div-space-between'>
                        {message.value}
                        <p className='m-0 body-xs pl-2'>{formattedTime}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className={styles['input-container']}>
        <input
          type='text'
          placeholder='Type your message...'
          value={inputValue}
          onChange={handleInputChange}
          className={styles['input']}
        />
        <span onClick={handleSendMessage}>{SendIcon('icon-md darkblue')}</span>
      </div>
    </div>
  );
};

export default ChatBox;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as WrongIconSVG } from '../../assets/iconSvg/close.svg';
import { addUserActions } from '../../store/add-user-slice';
import { validateEmail } from '../../utils/validations';
import Button from '../Buttons/Button';
import styles from './style.module.css';

const MultipleEmailInput = () => {
  const dispatch = useDispatch();

  const emails = useSelector(state => state.addUser.emails);

  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = e => {
    setError(null);
    setInputValue(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleEmailAdd();
    }
  };

  const handleEmailAdd = () => {
    if (inputValue.trim() !== '') {
      const newEmail = inputValue.trim();
      if (validateEmail(newEmail)) {
        if (emails.map(item => item.email).includes(newEmail)) {
          setError('Email already added');
        } else {
          dispatch(
            addUserActions.addEmail({
              id: new Date().getTime(),
              email: newEmail
            })
          );
          setInputValue('');
        }
      } else {
        setError('Please enter a valid email');
      }
    }
  };

  return (
    <>
      <p className='m-0 body-md'>Enter email IDs of users to be invited</p>
      <div className={styles['outer-div-emails']}>
        {emails.map(item => (
          <span key={item.id} className={styles['email-pill']}>
            {item.email}
            <Button
              variant='blue-color-button'
              iconPosition='right'
              icon={<WrongIconSVG className={styles['close-icon']} />}
              onClick={() => dispatch(addUserActions.removeEmail(item.id))}
              className='pl-1 pr-0 pt-0 pb-0'
            />
          </span>
        ))}
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={styles['text-area']}
        />
      </div>
      {error && <p className='error-text m-0 mt-1'>{error}</p>}
      <p className='helper-text m-0 mt-1'>
        This is an invite only feature, make sure you enter the correct email ID
      </p>
    </>
  );
};

export default MultipleEmailInput;

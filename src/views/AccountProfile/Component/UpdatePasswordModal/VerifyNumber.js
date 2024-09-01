import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as LeftIconSVG } from '../../../../assets/iconSvg/dropdown.svg';
import Button from '../../../../components/Buttons/Button';
import { loginSignupAction } from '../../../../store/login-signup-slice';
import styles from './VerifyNumber.module.css';

const VerifyNumber = props => {
  const { setView } = props;
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [isDisabled, setIsDisabled] = useState(true);
  const mobileNumber = useSelector(
    state => state.loginSignup.verifyNumber.mobileNumber
  );
  const dispatch = useDispatch();

  const handleBack = () => {
    setView('update by number');
  };

  useEffect(() => {
    const isEmpty = otp.some(digit => digit === '');
    setIsDisabled(isEmpty);
  }, [otp]);

  const handleChange = (index, event) => {
    const { value } = event.target;
    const singleDigitValue = value.slice(0, 1);
    const updatedOtp = [...otp];
    updatedOtp[index] = singleDigitValue;
    setOtp(updatedOtp);
  };

  const handleSubmit = isTrue => {
    dispatch(loginSignupAction.idLoggedIn(isTrue));
    setView('update password');
  };

  return (
    <div className='w-100'>
      <div className={styles['login-header']}>
        <div className='w-10'>
          <Button
            icon={<LeftIconSVG className={styles['left-icon']} />}
            iconPosition='left'
            className='p-0'
            variant='transparent'
            onClick={handleBack}
          />
        </div>
        <div className='w-90'>
          <p className='body-lg mb-0'>Verify your number</p>
        </div>
      </div>

      <div className={styles['login-body']}>
        <p className='body-sm'>
          Enter the 6 digit code we have sent to +91{' '}
          {`${mobileNumber.slice(0, 3)}***${mobileNumber.slice(-3)}`}
        </p>

        <div className='w-100'>
          {otp.map((digit, index) => (
            <input
              key={index}
              type='number'
              inputMode='numeric'
              placeholder='-'
              value={digit}
              maxLength={1}
              className={styles['input']}
              onChange={e => handleChange(index, e)}
            />
          ))}
        </div>

        <p className='body-sm mb-0'>
          Didn’t receive the code?{' '}
          <Link to='#' className='link-sm'>
            Resend code
          </Link>
        </p>
      </div>

      <div className={styles['login-footer']}>
        <Button
          label='Continue'
          className={styles['continue-button']}
          onClick={() => handleSubmit(true)}
          disabled={isDisabled}
        />
      </div>
    </div>
  );
};

export default VerifyNumber;

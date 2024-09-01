import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { fetchData } from '../../../apiMethods/api';
import { ReactComponent as LeftIconSVG } from '../../../assets/iconSvg/dropdown.svg';
import { ApiResDataAction } from '../../../store/apiRes-Data-slice';
// import { brokerAction } from '../../../store/broker-slice';
import { loginSignupAction } from '../../../store/login-signup-slice';
import Button from '../../Buttons/Button';
import styles from './VerifyNumber.module.css';
import { toastifySuccess } from '../../../Comman/AlertMsg';
// import { brokerAction } from '../../store/broker-slice';


const VerifyNumber = props => {

  const { setView, view, onClose, otpId, setOtpId, loggerType } = props;
  const [otp, setOtp] = useState(Array(6).fill(''));
  const inputRefs = useRef([]);

  const [isDisabled, setIsDisabled] = useState(true);
  const [expireOtp, setExpireOtp] = useState(true);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);

  const userPhone = useSelector(state => state.apiResData.userPhone);

  const mobileNumber = useSelector(
    view === 'login'
      ? state => state.loginSignup.login.loginData.mobileNumber
      : state => state.loginSignup.signup.signupData.mobileNumber
  );

  const dispatch = useDispatch();

  const handleBack = () => {
    setView(view);
  };

  useEffect(() => {
    const isEmpty = otp.some(digit => digit === '');
    setIsDisabled(isEmpty);
  }, [otp]);


  const handleChange = (index, event) => {
    const { value } = event.target;

    // const singleDigitValue = value.slice(0, 1);
    // const updatedOtp = [...otp];
    // updatedOtp[index] = singleDigitValue;
    // setOtp(updatedOtp);


    // const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };


  // old code
  // const handleSubmit = isTrue => {
  //   dispatch(loginSignupAction.idLoggedIn(isTrue));
  //   onClose();
  // };

  // Dev function 
  const handleSubmit = async (isTrue) => {
    const val = { otpId: otpId, otp: otp?.join(''), role: loggerType ? loggerType : 'broker' }
    // console.log(val)
    try {
      const res = await axios.post('https://93s7ifnkuj.execute-api.ap-south-1.amazonaws.com/dev/v1/auth/verify-otp', val);
      // console.log(res);
      if (res?.status === 200) {
        sessionStorage.setItem('Token', res.data?.data?.token);
        dispatch(loginSignupAction.LoginInfo(res?.data?.data?.user));
        dispatch(loginSignupAction.idLoggedIn(isTrue));
        onClose();
        toastifySuccess("Login Successfully");
        // getFeaturedBroker();
      }
    } catch (error) {
      console.log(error)
    }
  };

  // Dev function 
  const reSendOtp = async (contact) => {
    try {
      const res = await axios.post('https://93s7ifnkuj.execute-api.ap-south-1.amazonaws.com/dev/v1/auth/send-otp', { phoneNumber: contact });
      // console.log(res)
      if (res?.status === 200) {
        setOtpId(res?.data?.data?.otpId);
        dispatch(loginSignupAction.uploadLogin({ mobileNumber: contact, termCondition: true }));
        dispatch(ApiResDataAction.updatePhone(contact));
        setExpireOtp(true)
        timer(60);
        toastifySuccess("Otp Sent Successfully");
      }
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if (otpId) {
      timer(60);
    }
  }, [otpId]);

  const timer = (remaining) => {
    let m = Math.floor(remaining / 60);
    let s = remaining % 60;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    setMin(m)
    setSec(s)
    remaining -= 1;

    if (remaining >= 0 && otpId) {
      setTimeout(function () {
        timer(remaining);
      }, 1000);
      return;
    }
    setExpireOtp(false)
  }

  // const getFeaturedBroker = async () => {
  //   const res = await fetchData('brokers/featured');
  //   if (res?.length > 0) {
  //     dispatch(brokerAction.setFeaturedBroker(res));
  //   }
  //   // console.log(res)
  // }

  return (
    <>
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
            <p className={styles['heading-text']}>Verify your number</p>
          </div>
        </div>

        <div className={styles['login-body']}>
          <p className='white-text'>
            Enter the 6 digit code we have sent to +91{' '}
            {`${mobileNumber.slice(0, 3)}***${mobileNumber.slice(-3)}`}
          </p>

          <div className='w-100'>
            {otp?.map((digit, index) => (
              <input
                key={index}
                type='number'
                inputMode='numeric'
                placeholder='-'
                value={digit}
                maxLength={1}
                className={styles['input']}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onChange={e => handleChange(index, e)}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ))}
          </div>
          {
            !expireOtp ?
              <p className='white-text mb-0'>
                Didn’t receive the code?{' '}
                <Link to='#' onClick={() => { reSendOtp(userPhone) }} className={styles['link-text']}>
                  Resend code
                </Link>
              </p>
              :
              <>
                <p id='time' className='white-text' >Time Remaining<span style={{ color: '#fa9d4b' }}> {min + ':' + sec}</span></p>
                {/* <span id='seconds'></span> */}
              </>
          }
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
    </>
  );
};

export default VerifyNumber;

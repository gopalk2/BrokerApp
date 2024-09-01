import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as WrongIconSVG } from '../../../assets/iconSvg/close.svg';
import logo from '../../../assets/images/sirf-broker-logo-1.png';
import GoogleIcon from '../../../constants/icons/GoogleIcon';
import useInput from '../../../Hooks/use-input';
import { ApiResDataAction } from '../../../store/apiRes-Data-slice';
import { loginSignupAction } from '../../../store/login-signup-slice';
import { validateContact } from '../../../utils/validations';
import Button from '../../Buttons/Button';
import Checkbox from '../../Checkbox';
import InputWithBlock from '../../InputWithBlock';
import styles from './LoginModal.module.css';
import { toastifySuccess } from '../../../Comman/AlertMsg';

const LoginModal = props => {

  const { onClose, setView, handleView, setOtpId, setLoggerType, loggerType } = props;
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const handleChecked = () => {
    setChecked(!checked);
  };

  const {
    input: contact,
    isValid: isContactValid,
    isTouched: isContactTouched,
    handleInputChange: handleContactChange,
    handleInputBlur: handleContactBlurChange,
    handleInputFocus: handleContactFocus,
    resetInput: resetContact
  } = useInput(validateContact);

  const contactError = isContactTouched && !isContactValid;

  const label = (
    <p className='white-text mb-0'>
      I agree to all the{' '}
      <span className={styles['link-text']}>Terms & Condition</span> and
      <span className={styles['link-text']}>Privacy policy</span>
    </p>
  );

  // old function 
  // const handleClick = () => {
  //   dispatch(
  //     loginSignupAction.uploadLogin({
  //       mobileNumber: contact,
  //       termCondition: checked
  //     })
  //   );
  //   setView('verify');
  //   handleView('login');
  //   resetContact();
  // };

  // Dev function 
  const handleClick = async (contact) => {
    try {
      const res = await axios.post('https://93s7ifnkuj.execute-api.ap-south-1.amazonaws.com/dev/v1/auth/send-otp', { phoneNumber: contact });
      // console.log(res)
      if (res?.status === 200) {
        setOtpId(res?.data?.data?.otpId);
        dispatch(loginSignupAction.uploadLogin({ mobileNumber: contact, termCondition: checked }));
        dispatch(ApiResDataAction.updatePhone(contact));
        toastifySuccess("Otp Sent Successfully");
        setView('verify');
        handleView('login');
        resetContact();
      }
    } catch (error) {
      console.log(error)
    }
  };



  const handleOptionChange = (event) => {
    setLoggerType(event.target.value);
  };

  return (
    <>
      <div className='w-100'>
        <div className={styles['login-header']}>
          <div className='w-90'>
            <img src={logo} alt='login-logo' className={styles['logo']} />
          </div>
          <div className='w-10 text-end'>
            <Button
              icon={<WrongIconSVG className={styles['close-icon']} />}
              iconPosition='left'
              variant='transparent'
              onClick={onClose}
            />
          </div>
        </div>
        <div className={styles['login-body']}>
          <p className={styles['heading-text']}>Login/Signup</p>
          <div className='row'>
            <div className='col-6'>
              <div className='form-check'>
                <input className='form-check-input ' type='radio' name='loginOption' id='option1' value='user' checked={loggerType === 'user'} onChange={handleOptionChange} />
                <label className='form-check-label text-white' htmlFor='option1'>
                  User
                </label>
              </div>
            </div>
            <div className='col-6'>
              <div className='form-check'>
                <input className='form-check-input ' type='radio' name='loginOption' id='option2' value='broker' checked={loggerType === 'broker'} onChange={handleOptionChange} />
                <label className='form-check-label text-white' htmlFor='option2'>
                  Broker
                </label>
              </div>
            </div>
          </div>
          <div className='mb-4'>
            <InputWithBlock
              label='Mobile Number'
              type=''
              className='w-100 mb-3'
              value={contact}
              blockPosition='start'
              blockCss={styles['dark-background']}
              blockValue='+91'
              onChange={handleContactChange}
              onBlur={handleContactBlurChange}
              onFocus={handleContactFocus}
              showError={contactError}
              variant='input-with-label-on-top-white'
              inputCss={styles['form-input']}
              placeholder='Enter your contact number'
              maxLength={10}
              // EnterType={'PhoneField'}
              // pattern=
              helperText={
                contactError
                  ? contact
                    ? 'Please enter a valid conatct number'
                    : 'This is a mandatory field'
                  : ''
              }
            />
            <Checkbox label={label} checked={checked} onChange={handleChecked} />
          </div>
          <Button
            label='Continue'
            className={styles['continue-button']}
            onClick={() => { handleClick(contact) }}
            disabled={!isContactValid || !checked}
          />
          <div className={styles['footer-div']}>
            <div className={styles['footer-text-div']}>
              <span className={styles['footer-text']}> or</span>
            </div>
          </div>
          <div className='mt-3 mb-2 div-center'>
            <div className='w-mc'>
              <GoogleIcon />
            </div>
            <div className='w-mc'>
              <p className={styles['footer-large-text']}>Connect with Google</p>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};

export default LoginModal;

import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as WrongIconSVG } from '../../../../assets/iconSvg/close.svg';
import Button from '../../../../components/Buttons/Button';
import InputWithBlock from '../../../../components/InputWithBlock';
import useInput from '../../../../Hooks/use-input';
import { loginSignupAction } from '../../../../store/login-signup-slice';
import { validateContact } from '../../../../utils/validations';
import styles from './ResetPassword.module.css';

const ResetPasswordByNumber = props => {
  const { setView, onClose } = props;
  const dispatch = useDispatch();

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

  const handleSubmit = () => {
    dispatch(loginSignupAction.verifyNumber({ mobileNumber: contact }));
    setView('verify');
    resetContact();
  };

  const handleBack = () => {
    onClose();
  };

  return (
    <form className={styles['form-div']} onSubmit={handleSubmit}>
      <div>
        <div className='div-space-between mb-4'>
          <h2 className='body-lg m-0'>Reset Password</h2>
          <Button
            icon={<WrongIconSVG className={styles['close-icon']} />}
            iconPosition='left'
            variant='blue-color-button'
            className='f-sm'
            onClick={handleBack}
          />
        </div>
        <InputWithBlock
          label='Mobile Number'
          type='number'
          className='w-100 mb-3'
          value={contact}
          blockPosition='start'
          blockCss={styles['white-background']}
          blockValue='+91'
          onChange={handleContactChange}
          onBlur={handleContactBlurChange}
          onFocus={handleContactFocus}
          showError={contactError}
          placeholder='Enter your contact number'
          helperText={
            contactError
              ? contact
                ? 'Please enter a valid conatct number'
                : 'This is a mandatory field'
              : ''
          }
        />
        <p className='helper-text mt-1'>
          You will receive an OTP on your mobile number after you press Submit.
        </p>
      </div>
      <Button
        label='Submit'
        className={styles['continue-button']}
        type='submit'
        disabled={!isContactValid}
      />
    </form>
  );
};

export default ResetPasswordByNumber;

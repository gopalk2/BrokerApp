import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as WrongIconSVG } from '../../../../assets/iconSvg/close.svg';
import Button from '../../../../components/Buttons/Button';
import InputPassword from '../../../../components/InputPassword';
import useInput from '../../../../Hooks/use-input';
import { loginSignupAction } from '../../../../store/login-signup-slice';
import { validatePassword } from '../../../../utils/validations';
import styles from './ResetPassword.module.css';

const ResetPassword = props => {

  const { onClose } = props;
  const dispatch = useDispatch();

  const {
    input: newPassword,
    isValid: isNewPasswordValid,
    isTouched: isNewPasswordTouched,
    handleInputChange: handleNewPasswordChange,
    handleInputBlur: handleNewPasswordBlurChange,
    handleInputFocus: handleNewPasswordFocus
  } = useInput(validatePassword);

  const {
    input: confirmPassword,
    isValid: isConfirmPasswordValid,
    isTouched: isConfirmPasswordTouched,
    handleInputChange: handleConfirmPasswordChange,
    handleInputBlur: handleConfirmPasswordBlurChange,
    handleInputFocus: handleConfirmPasswordFocus
  } = useInput(validatePassword);

  const newPasswordError = newPassword && isNewPasswordTouched && !isNewPasswordValid;

  const confirmPasswordError = confirmPassword && isConfirmPasswordTouched && !isConfirmPasswordValid;

  const handleSubmit = () => {
    if (newPassword === confirmPassword) {
      const updatedPassword = (newPassword = confirmPassword);
      dispatch(
        loginSignupAction.passwordUpdated({ updatedPassword: updatedPassword })
      );
    }
  };

  const handleBack = () => {
    onClose();
  };

  return (
    <form className={styles['form-div']} onSubmit={handleSubmit}>
      <div className='mb-3'>
        <div className='div-space-between mb-4'>
          <h2 className='body-xxl'>Reset Password</h2>
          <Button
            icon={<WrongIconSVG className={styles['close-icon']} />}
            iconPosition='left'
            variant='blue-color-button'
            className='f-sm'
            onClick={handleBack}
          />
        </div>
        <InputPassword
          label={'New Password'}
          className='w-100 mb-3'
          value={newPassword}
          onChange={handleNewPasswordChange}
          onBlur={handleNewPasswordBlurChange}
          onFocus={handleNewPasswordFocus}
          showError={newPasswordError}
          placeholder='* * * * * * * *'
          helperText={
            newPasswordError
              ? 'Password should be atleast 8 characters long'
              : ''
          }
        />
        <InputPassword
          label={'Confirm Password'}
          className='w-100'
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          onBlur={handleConfirmPasswordBlurChange}
          onFocus={handleConfirmPasswordFocus}
          showError={confirmPasswordError}
          placeholder='* * * * * * * *'
          helperText={confirmPasswordError ? 'Passwords does not match' : ''}
        />
      </div>
      <Button
        label='Update Password'
        className={styles['continue-button']}
        type='submit'
        disabled={
          !isNewPasswordValid ||
          !isConfirmPasswordValid ||
          newPassword !== confirmPassword
        }
      />
    </form>
  );
};

export default ResetPassword;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../components/Buttons/Button';
import InputLabel from '../../../../components/InputLabel';
import InputWithBlock from '../../../../components/InputWithBlock';
import useInput from '../../../../Hooks/use-input';
import { brokerProfileAction } from '../../../../store/broker-profile-slice';
import { validateContact, validateEmail, validateText } from '../../../../utils/validations';
import styles from './ConnectWithUsForm.module.css';

const ConnectWithUsForm = ({ setFormSubmit, formSubmit }) => {

  const dispatch = useDispatch();
  const contactWithUs = useSelector(state => state.brokerProfile?.connectWithUs);

  const {
    input: email,
    isValid: isEmailValid,
    isTouched: isEmailTouched,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlurChange,
    handleInputFocus: handleEmailFocus,
    resetInput: resetEmail
  } = useInput(validateEmail);

  const {
    input: name,
    isValid: isNameValid,
    isTouched: isNameTouched,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlurChange,
    handleInputFocus: handleNameFocus,
    resetInput: resetName
  } = useInput(validateText);

  const {
    input: contact,
    isValid: isContactValid,
    isTouched: isContactTouched,
    handleInputChange: handleContactChange,
    handleInputBlur: handleContactBlurChange,
    handleInputFocus: handleContactFocus,
    resetInput: resetContact
  } = useInput(validateContact);

  const {
    input: organization,
    isValid: isOrganizationValid,
    isTouched: isOrganizationTouched,
    handleInputChange: handleOrganizationChange,
    handleInputBlur: handleOrganizationBlurChange,
    handleInputFocus: handleOrganizationFocus,
    resetInput: resetOrganization
  } = useInput(validateText);

  const {
    input: designation,
    isValid: isDesignationValid,
    isTouched: isDesignationTouched,
    handleInputChange: handleDesignationChange,
    handleInputBlur: handleDesignationBlurChange,
    handleInputFocus: handleDesignationFocus,
    resetInput: resetDesignation
  } = useInput(validateText);

  const emailError = isEmailTouched && !isEmailValid;
  const nameError = isNameTouched && !isNameValid;
  const contactError = isContactTouched && !isContactValid;
  const organizationError = isOrganizationTouched && !isOrganizationValid;
  const designationError = isDesignationTouched && !isDesignationValid;

  const formValid = !emailError && !nameError && !contactError && !organizationError && !designationError;

  const form = [
    <InputLabel
      key='email'
      label='Official Email ID'
      type='email'
      value={email}
      className='w-100 mb-3'
      onChange={handleEmailChange}
      onBlur={handleEmailBlurChange}
      onFocus={handleEmailFocus}
      showError={emailError}
      placeholder='Please enter a email id'
      variant='input-with-label-on-top-white'
      inputStyle={styles['form-input']}
      helperText={
        emailError
          ? email
            ? 'Please enter a valid email id'
            : 'This is a mandatory field'
          : ''
      }
    />,
    <InputLabel
      key='Full Name'
      label='Full Name'
      value={name}
      className='w-100 mb-3'
      onChange={handleNameChange}
      onBlur={handleNameBlurChange}
      onFocus={handleNameFocus}
      showError={nameError}
      placeholder='Please enter a email id'
      variant='input-with-label-on-top-white'
      inputStyle={styles['form-input']}
      helperText={
        nameError
          ? name
            ? 'Please enter a full name'
            : 'This is a mandatory field'
          : ''
      }
    />,
    <InputWithBlock
      key='Contact Number'
      label='Contact Number'
      type='number'
      className='w-100 mb-3'
      value={contact}
      blockPosition='start'
      blockCss={styles['dark-background']}
      variant='input-with-label-on-top-white'
      inputCss={styles['form-input']}
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
    />,
    <InputLabel
      key='Organization'
      label='Organization'
      className='w-100 mb-3'
      value={organization}
      onChange={handleOrganizationChange}
      onBlur={handleOrganizationBlurChange}
      onFocus={handleOrganizationFocus}
      showError={organizationError}
      placeholder='Enter your organization'
      variant='input-with-label-on-top-white'
      inputStyle={styles['form-input']}
      helperText={
        organizationError
          ? organization
            ? 'Please enter a valid organization'
            : 'This is a mandatory field'
          : ''
      }
    />,
    <InputLabel
      key='Designation'
      label='Designation'
      className='w-100 mb-3'
      value={designation}
      onChange={handleDesignationChange}
      onBlur={handleDesignationBlurChange}
      onFocus={handleDesignationFocus}
      showError={designationError}
      placeholder='Enter your designation'
      variant='input-with-label-on-top-white'
      inputStyle={styles['form-input']}
      helperText={
        designationError
          ? designation
            ? 'Please enter a valid designation'
            : 'This is a mandatory field'
          : ''
      }
    />
  ];

  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(
      brokerProfileAction.updateConnectWithUs({
        email: email,
        name: name,
        contactNumber: contact,
        organization: organization,
        designation: designation
      })
    );
    setFormSubmit(!formSubmit);
    resetEmail();
    resetName();
    resetContact();
    resetOrganization();
    resetDesignation();
  };

  return (
    <div className={styles['form-container']}>
      <div className={styles['heading-container']}>
        <p className={styles['header-text']}>Connect with us</p>
      </div>
      <form className={'w-100'} onSubmit={handleFormSubmit}>
        <div className='w-100 mb-4'>{form}</div>
        <Button
          label='Submit Details'
          type='submit'
          className={styles['submit-details-button']}
          disabled={!formValid}
        />
      </form>
    </div>
  );
};

export default ConnectWithUsForm;

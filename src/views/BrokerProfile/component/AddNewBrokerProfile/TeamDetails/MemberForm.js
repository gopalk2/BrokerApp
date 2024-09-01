import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputLabel from '../../../../../components/InputLabel';
import InputWithBlock from '../../../../../components/InputWithBlock';
import useInput from '../../../../../Hooks/use-input';
import { brokerProfileAction } from '../../../../../store/broker-profile-slice';
import {
  validateContact,
  validateEmail,
  validateText
} from '../../../../../utils/validations';
import UploadLogo from '../UploadLogo';
import styles from './MemberForm.module.css';

const MemberForm = props => {
  const { member } = props;
  const dispatch = useDispatch();



  const [contactNo, setContactNo] = useState('');

  useEffect(() => {
    const sanitizedContactNo = member.contactNo.replace(/\+/g, '');
    setContactNo(sanitizedContactNo);
  }, [member.contactNo]);

  const {
    error: emailError,
    handleInputBlur: handleEmailBlur,
    handleInputFocus: handleEmailFocus,
    handleInputChange: updateEmailChange,
  } = useInput(validateEmail);

  const {
    error: nameError,
    handleInputBlur: handleNameBlur,
    handleInputFocus: handleNameFocus,
    handleInputChange: updateNameChange,
  } = useInput(validateText);

  const {
    error: priceError,
    handleInputBlur: handlePriceBlur,
    handleInputFocus: handlePriceFocus,
    handleInputChange: updatePriceChange,
  } = useInput(validateText);

  const {
    error: contactError,
    handleInputBlur: handleContactBlur,
    handleInputFocus: handleContactFocus,
    handleInputChange: updateContactChange,
  } = useInput(validateContact);

  const handleEmailChange = e => {
    updateEmailChange(e);
    const { value } = e.target;

    dispatch(
      brokerProfileAction.updateTeamMemberEmail({
        id: member.id,
        email: value
      })
    );
  };

  const handleNameChange = e => {
    updateNameChange(e);
    const { value } = e.target;
    dispatch(
      brokerProfileAction.updateTeamMemberName({
        id: member.id,
        name: value
      })
    );
  };


  const handlePriceChange = e => {
    updatePriceChange(e);
    const { value } = e.target;
    dispatch(
      brokerProfileAction.updateStartingPrice({
        id: member.id,
        startingPrice: value
      })
    );
  };

  const handleContactChange = e => {
    updateContactChange(e);
    const { value } = e.target;
    dispatch(
      brokerProfileAction.updateTeamMemberContactNumber({
        id: member.id,
        contactNo: value
      })
    );
  };

  const handleImageUpload = image => {
    dispatch(
      brokerProfileAction.updateTeamMemberLogo({
        id: member.id,
        image: image
      })
    );
  };

  const memberLogo = useSelector(state =>
    state.brokerProfile.reraTypes.team?.find(item => item.id === member.id)?.image
  );



  const formItems = [
    <InputLabel
      key="email"
      label='Official Email id'
      className='w-48 mb-2'
      value={member.email}
      onChange={handleEmailChange}
      onBlur={handleEmailBlur}
      onFocus={handleEmailFocus}
      showError={emailError}
      placeholder='Enter your official email id'
      helperText={emailError ? 'Please enter a valid Official Email id' : ''}
    />,
    <InputLabel
      key="name"
      label='Full Name'
      className='w-48 mb-2'
      value={member.name}
      onChange={handleNameChange}
      onBlur={handleNameBlur}
      onFocus={handleNameFocus}
      showError={nameError}
      placeholder='Enter your Full Name'
      helperText={nameError ? 'Please enter a valid Full Name' : ''}
    />,
    <InputLabel
      key="price"
      label='Starting Price (in INR/sq.ft./month)'
      className='w-48 mb-2'
      value={member.startingPrice}
      onChange={handlePriceChange}
      onBlur={handlePriceBlur}
      onFocus={handlePriceFocus}
      showError={priceError}
      placeholder='Enter your Starting Price'
      helperText={priceError ? 'Please enter a valid Starting Price' : ''}
    />,
    <InputWithBlock
      key="contact"
      label='Official Contact Number'
      type='number'
      className='w-48 mb-2'
      value={contactNo}
      blockPosition='start'
      blockValue='+91'
      onChange={handleContactChange}
      onBlur={handleContactBlur}
      onFocus={handleContactFocus}
      showError={contactError}
      placeholder='Enter your Official Contact Number'
      helperText={contactError ? 'Please enter a valid contact number' : ''}
    />
  ];

  return (
    <form className={styles['form-div']} key={member.id}>
      <div className='d-flex w-100'>
        <div className='w-25'>
          <UploadLogo
            label='Cover Photo'
            shape='circle'
            name={member.name}
            preview={memberLogo}
            onImageUpload={handleImageUpload}
          />
        </div>
        <div className='w-75'>
          <div className={styles['form-items-div']}>{formItems}</div>
        </div>
      </div>
    </form>
  );
};

export default MemberForm;

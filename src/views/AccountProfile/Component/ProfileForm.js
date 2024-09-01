import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../apiMethods/api';
import { ReactComponent as RightIconSVG } from '../../../assets/iconSvg/dropdown.svg';
import Button from '../../../components/Buttons/Button';
import InputLabel from '../../../components/InputLabel';
import InputWithBlock from '../../../components/InputWithBlock';
import InputWithMultiSelectDropdown from '../../../components/InputWithMultiSelectDropdown';
import PopModal from '../../../components/PopModal';
import useInput from '../../../Hooks/use-input';
import { loginSignupAction } from '../../../store/login-signup-slice';
import {
  validateContact,
  validateEmail,
  validateText
} from '../../../utils/validations';
import { localityData } from '../../Home/config/homeData';
import styles from './Profile.module.css';
import ResetPassword from './UpdatePasswordModal/ResetPassword';
import ResetPasswordByNumber from './UpdatePasswordModal/ResetPasswordByNumber';
import VerifyNumber from './UpdatePasswordModal/VerifyNumber';
import UploadImage from './UploadImage';
import DropdownSingleSelection from '../../../components/DropdownSingleSelection';
import { toastifySuccess } from '../../../Comman/AlertMsg';
import { ToastContainer } from 'react-toastify';

const ProfileForm = () => {

  const dispatch = useDispatch();
  const [locality, setLocality] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [view, setView] = useState('update by number');
  const [userProfileData, setUserProfileData] = useState()
  // const [imgUrl, setImgUrl] = useState()
  const { email, contactNo, organization, designation, id, name, image, role, cityId, status, createdAt, updatedAt } = useSelector(state => state.loginSignup?.profileData);
  // console.log(profileData)


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  let modal;
  if (view === 'update by number') {
    modal = <ResetPasswordByNumber setView={setView} onClose={closeModal} />;
  } else if (view === 'verify') {
    modal = <VerifyNumber setView={setView} />;
  } else if (view === 'update password') {
    modal = <ResetPassword onClose={closeModal} />;
  }

  const {
    // input: email,
    isValid: isEmailValid,
    isTouched: isEmailTouched,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlurChange,
    handleInputFocus: handleEmailFocus,
    resetInput: resetEmail
  } = useInput(validateEmail);

  const {
    // input: contact,
    isValid: isContactValid,
    isTouched: isContactTouched,
    handleInputChange: handleContactChange,
    handleInputBlur: handleContactBlurChange,
    handleInputFocus: handleContactFocus,
    resetInput: resetContact
  } = useInput(validateContact);

  const {
    // input: organization,
    isValid: isOrganizationValid,
    isTouched: isOrganizationTouched,
    handleInputChange: handleOrganizationChange,
    handleInputBlur: handleOrganizationBlurChange,
    handleInputFocus: handleOrganizationFocus,
    resetInput: resetOrganization
  } = useInput(validateText);

  const {
    // input: designation,
    isValid: isDesignationValid,
    isTouched: isDesignationTouched,
    handleInputChange: handleDesignationChange,
    handleInputBlur: handleDesignationBlurChange,
    handleInputFocus: handleDesignationFocus,
    resetInput: resetDesignation
  } = useInput(validateText);

  const emailError = isEmailTouched && !isEmailValid;
  const contactError = isContactTouched && !isContactValid;
  const organizationError = isOrganizationTouched && !isOrganizationValid;
  const designationError = isDesignationTouched && !isDesignationValid;

  const onChangeEmailChange = (value) => {
    dispatch(loginSignupAction.updateEmail(value));
  };

  const onChangeContactChange = (value) => {
    dispatch(loginSignupAction.updateContact(value));
  };

  const onChangeOrganizationChange = (value) => {
    dispatch(loginSignupAction.updateOrganization(value));
  };

  const onChangeDesignationChange = (value) => {
    dispatch(loginSignupAction.updateDesignation(value));
  };

  const onChangeImgChange = (value) => {
    dispatch(loginSignupAction.updateImageUrl(value));
  };

  const handleCity = val => {
    console.log(val?.id);
    // dispatch(brokerAction.updateCityFilter({ city: val }));
  };

  const form = [
    <InputLabel
      variant='label-input-one-line'
      label='Email ID'
      type='email'
      value={email}
      // value={email ? email : userProfileData?.email}
      className={styles['border']}
      // onChange={handleEmailChange}
      onChange={e => {
        handleEmailChange(e);
        onChangeEmailChange(e.target.value);
      }}
      onBlur={handleEmailBlurChange}
      onFocus={handleEmailFocus}
      showError={emailError}
      placeholder='Please enter a email id'
      helperText={
        emailError
          ? email
            ? 'Please enter a valid email id'
            : 'This is a mandatory field'
          : ''
      }
    />,
    <InputWithBlock
      variant='input-with-block-with-label-in-line'
      label='Contact Number'
      type='number'
      className={styles['border']}
      value={contactNo}
      // value={contact ? contact : userProfileData?.contactNo}
      blockPosition='start'
      blockCss={styles['white-background']}
      blockValue='+91'
      // onChange={handleContactChange}
      onChange={e => {
        handleContactChange(e);
        onChangeContactChange(e.target.value);
      }}
      onBlur={handleContactBlurChange}
      onFocus={handleContactFocus}
      showError={contactError}
      disabled={true}
      placeholder='Enter your contact number'
      helperText={
        contactError
          ? contactNo
            ? 'Please enter a valid conatct number'
            : 'This is a mandatory field'
          : ''
      }
    />,
    <InputLabel
      variant='label-input-one-line'
      label='Organization'
      className={styles['border']}
      value={organization}
      // onChange={handleOrganizationChange}
      onChange={e => {
        handleOrganizationChange(e);
        onChangeOrganizationChange(e.target.value);
      }}
      onBlur={handleOrganizationBlurChange}
      onFocus={handleOrganizationFocus}
      showError={organizationError}
      placeholder='Enter your organization'
      helperText={
        organizationError
          ? organization
            ? 'Please enter a valid organization'
            : 'This is a mandatory field'
          : ''
      }
    />,
    <InputLabel
      variant='label-input-one-line'
      label='Designation'
      className={styles['border']}
      value={designation}
      // onChange={handleDesignationChange}
      onChange={e => {
        handleEmailChange(e);
        onChangeDesignationChange(e.target.value);
      }}
      onBlur={handleDesignationBlurChange}
      onFocus={handleDesignationFocus}
      showError={designationError}
      placeholder='Enter your designation'
      helperText={
        designationError
          ? designation
            ? 'Please enter a valid designation'
            : 'This is a mandatory field'
          : ''
      }
    />,
    // <DropdownSingleSelection
    //   defaultValue={'Delhi'}
    //   // data={citiesOptions}
    //   // data={cityData}
    //   variant='label-input-one-line'
    //   iconPosition=''
    //   dropdownChangeHandler={handleCity}
    // />

    // <InputWithMultiSelectDropdown
    //   label='Preferred (in order of preference)'
    //   options={localityData}
    //   className={styles['border']}
    //   selectedOptions={locality}
    //   setSelectedOptions={setLocality}
    //   dropdownStyles={`w-30`}
    //   variant='multi-input-with-dropdown-with-label-in-line'
    //   pillStyles={'mb-1'}
    //   dropdownOptionsStyle={styles['dropdown-background']}
    // />
  ];

  const handleFormSubmit = e => {
    e.preventDefault();
    resetEmail();
    resetContact();
    resetOrganization();
    resetDesignation();
  };

  useEffect(() => {
    getUserInfo()
  }, []);

  const getUserInfo = async () => {
    const res = await fetchData('user/profile');
    if (res) {
      // console.log(res)
      dispatch(loginSignupAction.uploadLogin({ mobileNumber: parseInt(res?.contactNo), termCondition: true }));
      dispatch(loginSignupAction.idLoggedIn(true));
      dispatch(loginSignupAction.updateProfile(res));
      setUserProfileData(res);
      // setImgUrl(res?.image)
    }
    // console.log(res)
  }

  const updateUserProfile = async () => {
    // const { cityId, createdAt, id, role, status, } = userProfileData
    const data = {
      'name': name, 'email': email, 'image': image, 'cityId': cityId, 'organization': organization,
      'designation': designation, 'id': id, 'role': role, 'status': status, 'createdAt': createdAt
    }
    const res = await axios.put('user/profile', data);
    // console.log(res);
    if (res?.status == 200) {
      toastifySuccess("Update Successfully")
    }
  }

  return (
    <>
      <div className={styles['form-container']}>
        <div className='w-90'>
          <form className={'w-100'} onSubmit={handleFormSubmit}>
            <div className={styles['profile-form']}>
              <div className='w-100 h-15'>
                <UploadImage shape='circle' onChangeImgChange={onChangeImgChange} image={image} />
              </div>
              <div className='w-100 h-85 mb-4'>{form}</div>
              {/* <div className='w-100 d-flex h-85 mb-4'>
              <div className='w-25'>
                <span className='body-sm'>
                  Password
                  <span className={styles['preferred-text']}>
                    (last updated 17 days ago)
                  </span>
                </span>
              </div>
              <div className='w-30'>
                <Button
                  label='Update Password'
                  icon={<RightIconSVG className={styles['right-icon']} />}
                  iconPosition='right'
                  variant='lm-light-outlined-button'
                  className={styles['update-button']}
                  onClick={openModal}
                />
              </div>
            </div> */}
            </div>
            <Button
              label='Update'
              className={styles['update-button-profile']}
              type=''
              iconPosition='right'
              variant=''
              onClick={updateUserProfile}
            />
          </form>
        </div>
        <PopModal
          onClose={closeModal}
          isOpen={modalOpen}
          size='sm'
          className={view === 'verify' ? 'p-0' : 'p-4'}
        >
          {modal}
        </PopModal>
      </div>
      <ToastContainer />
    </>
  );
};

export default ProfileForm;

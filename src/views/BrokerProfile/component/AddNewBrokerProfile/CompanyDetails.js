import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../../apiMethods/api';
import { ReactComponent as LocationFillIconSVG } from '../../../../assets/iconSvg/location.svg';
import { threeColArray } from '../../../../Comman/Utility';
import InputLabel from '../../../../components/InputLabel';
import InputWithBlock from '../../../../components/InputWithBlock';
import InputWithIcon from '../../../../components/InputWithIcon';
import InputWithMultiSelectDropdown from '../../../../components/InputWithMultiSelectDropdown';
import InputWithTextArea from '../../../../components/InputWithTextArea';
import useInput from '../../../../Hooks/use-input';
import { brokerProfileAction } from '../../../../store/broker-profile-slice';
import { cityOFOperation } from '../../config/brokerProfileData';
import {
  validateContact,
  validateEmail,
  validateText,
  validateWebsite
} from '../../../../utils/validations';
import styles from './CompanyDetails.module.css';
import UploadLogo from './UploadLogo';

const CompanyDetails = props => {

  const { setDisabled } = props;
  const [cityOperation, setCityOperation] = useState([]);
  const [areaOperation, setAreaOperation] = useState([]);
  const [cities ,setCities] = useState([]);
  const [locations, setLocations] = useState([]);
  const [locationsByCity, setLocationsByCity] = useState({});
  const [locationsId ,setLocationsId] = useState([]);
  const [selectedLocationsByCity, setSelectedLocationsByCity] = useState({});


  
 
  const dispatch = useDispatch();
  // const cities = useSelector(state => state.brokerProfile.cities);

  const companyDetails = useSelector(state => state.brokerProfile?.reraTypes);
  const companyDetailss = useSelector(state => state.brokerProfile);



  const areaOfOperation = useSelector(
    state => state.brokerProfile.citiesOperation
  );

 

  
  const { name , email, contactNo, website, headquaterAddress, linkedInProfileUrl, aboutCompany, companyLogo } = companyDetails;

  const fetchCitiesData = async () => {
    const response = await fetchData('master/cities');
    if (response?.length > 0) {
      return threeColArray(response, 'id', 'name');
    }
    return [];
  };

 

  const fetchLocationsData = async (cityIds) => {
    try {
      const responses = await Promise.all(
        cityIds.map((cityId) => fetchData(`master/cities/${cityId}/locations`))
      );
      const locations = responses.flat();
      if (Array.isArray(locations) && locations.length > 0) {
        // Group locations by cityId
        const locationsByCity = cityIds.reduce((acc, cityId, index) => {
          acc[cityId] = threeColArray(responses[index], 'id', 'name');
          return acc;
        }, {});
        return locationsByCity;
      }
      return {};
    } catch (error) {
      console.error('Error fetching locations data:', error);
      return {};
    }
  };
  

  useEffect(() => {
    const getLocations = async () => {
      if (cityOperation.length > 0) {
        const cityIds = cityOperation; 
        const citiesLocations = await fetchLocationsData(cityIds);
        setLocationsByCity(citiesLocations);
        dispatch(brokerProfileAction.citiesOfOperation(cityOperation));
      }
    };
    getLocations();
  }, [cityOperation, dispatch]);
  
  
  useEffect(() => {
    const getCitiesData = async () => {
      const citiesData = await fetchCitiesData();
      setCities(citiesData)
      // dispatch(brokerProfileAction.updateCityData(citiesData));
    };
    getCitiesData();
  }, [dispatch]);

  const {
    isValid: isCompanyNameValid,
    isTouched: isCompanyNameTouched,
    handleInputChange: handleCompanyNameChange,
    handleInputBlur: handleCompanyNameBlur,
    handleInputFocus: handleCompanyNameFocus,
    resetInput: resetCompanyName
  } = useInput(validateText);

  const {
    isValid: isOfficialEmailIdValid,
    isTouched: isOfficialEmailIdTouched,
    handleInputChange: handleOfficialEmailIdChange,
    handleInputBlur: handleOfficialEmailIdBlur,
    handleInputFocus: handleOfficialEmailIdFocus,
    resetInput: resetOfficialEmailId
  } = useInput(validateEmail);

  const {
    isValid: isOfficialContactNumberValid,
    isTouched: isOfficialContactNumberTouched,
    handleInputChange: handleOfficialContactNumberChange,
    handleInputBlur: handleOfficialContactNumberBlur,
    handleInputFocus: handleOfficialContactNumberFocus,
    resetInput: resetOfficialContactNumber
  } = useInput(validateContact);

  const {
    isValid: isOfficialWebsiteValid,
    isTouched: isOfficialWebsiteTouched,
    handleInputChange: handleOfficialWebsiteChange,
    handleInputBlur: handleOfficialWebsiteBlur,
    handleInputFocus: handleOfficialWebsiteFocus,
    resetInput: resetOfficialWebsite
  } = useInput(validateWebsite);

  const {
    isValid: isCompanyHeadquarterValid,
    isTouched: isCompanyHeadquarterTouched,
    handleInputChange: handleCompanyHeadquarterChange,
    handleInputBlur: handleCompanyHeadquarterBlur,
    handleInputFocus: handleCompanyHeadquarterFocus,
    resetInput: resetCompanyHeadquarter
  } = useInput(validateText);

  const {
    isValid: isLinkedinValid,
    isTouched: isLinkedinTouched,
    handleInputChange: handleLinkedinChange,
    handleInputBlur: handleLinkedinBlur,
    handleInputFocus: handleLinkedinFocus,
    resetInput: resetLinkedin
  } = useInput(validateText);

  const {
    isValid: isAboutCompanyValid,
    isTouched: isAboutCompanyTouched,
    handleInputChange: handleAboutCompanyChange,
    handleInputBlur: handleAboutCompanyBlur,
    handleInputFocus: handleAboutCompanyFocus,
    resetInput: resetAboutCompany
  } = useInput(validateText);

  const officialContactNumberError = isOfficialContactNumberTouched && !isOfficialContactNumberValid;
  const officialWebsiteError = isOfficialWebsiteTouched && !isOfficialWebsiteValid;
  const companyHeadquarterError = isCompanyHeadquarterTouched && !isCompanyHeadquarterValid;
  const linkedinError = isLinkedinTouched && !isLinkedinValid;
  const aboutCompanyError = isAboutCompanyTouched && !isAboutCompanyValid;
  const emailError = isOfficialEmailIdTouched && !isOfficialEmailIdValid;
  const companyError = isCompanyNameTouched && !isCompanyNameValid;

  const formValid = !officialContactNumberError && !officialWebsiteError && !companyHeadquarterError && !linkedinError && !aboutCompanyError && !emailError && !companyError;

  const handleNameChange = (value) => {
    dispatch(brokerProfileAction.updateCompanyName({ name: value }));
  };

  const handleEmailChange = (value) => {
    dispatch(brokerProfileAction.updateOfficialEmailId({ email: value }));
  };

  const handleContactChange = (value) => {
    dispatch(brokerProfileAction.updateOfficialContactNumber({ contactNo: value }));
  };

  const handleWebsiteChange = (value) => {
    dispatch(brokerProfileAction.updateOfficialWebsite({ website: value }));
  };

  const handleHeadquarterChange = (value) => {
    dispatch(brokerProfileAction.updateCompanyHeadquarter({ headquaterAddress: value }));
  };

  const handleLinkedInChange = (value) => {
    dispatch(brokerProfileAction.updateLinkedin({ linkedInProfileUrl: value }));
  };

  const handleAboutChange = (value) => {
    dispatch(brokerProfileAction.updateAboutCompany({ aboutCompany: value }));
  };



  const formItem = [
    <InputLabel
      label='Company Name'
      className={`w-100 mb-2`}
      value={name ? name : ''}
      onChange={e => {
        handleCompanyNameChange(e);
        handleNameChange(e.target.value);
      }}
      onBlur={handleCompanyNameBlur}
      onFocus={handleCompanyNameFocus}
      showError={companyError}
      placeholder='Enter your Company Name'
      helperText={companyError ? 'This is a mandatory field' : ''}
    />,
    <InputLabel
      label='Official Email id'
      className='w-100 mb-2'
      value={email}
      onChange={e => {
        handleOfficialEmailIdChange(e);
        handleEmailChange(e.target.value);
      }}
      onBlur={handleOfficialEmailIdBlur}
      onFocus={handleOfficialEmailIdFocus}
      showError={emailError}
      placeholder='Enter your official email id'
      helperText={emailError ? email ? 'Please enter a valid email id' : 'This is a mandatory field' : ''}
    />
  ];

  useEffect(() => {
    dispatch(brokerProfileAction.citiesOfOperation(cityOperation));
  }, [cityOperation, dispatch]);


  const formItem2 = [
    <InputWithBlock
      label='Official Contact Number'
      className='w-48 mb-2'
      value={contactNo}
      blockPosition='start'
      blockValue='+91'
      onChange={e => {
        handleOfficialContactNumberChange(e);
        handleContactChange(e.target.value);
      }}
      onBlur={handleOfficialContactNumberBlur}
      onFocus={handleOfficialContactNumberFocus}
      showError={officialContactNumberError}
      placeholder='Enter your Official Contact Number'
      helperText={
        officialContactNumberError
          ? contactNo
            ? 'Please enter a valid contact number'
            : 'This is a mandatory field'
          : ''
      }
    />,
    <InputLabel
      label='Official Website'
      className='w-48 mb-2'
      value={website}
      onChange={e => {
        handleOfficialWebsiteChange(e);
        handleWebsiteChange(e.target.value);
      }}
      onBlur={handleOfficialWebsiteBlur}
      onFocus={handleOfficialWebsiteFocus}
      showError={officialWebsiteError}
      placeholder='Enter your Official Website'
      helperText={
        officialWebsiteError
          ? website
            ? 'Please enter a valid website'
            : 'This is a mandatory field'
          : ''
      }
    />,
    <InputWithIcon
      label='Company Headquarter'
      className='w-48 mb-2'
      value={headquaterAddress}
      onChange={e => {
        handleCompanyHeadquarterChange(e);
        handleHeadquarterChange(e.target.value);
      }}
      onBlur={handleCompanyHeadquarterBlur}
      onFocus={handleCompanyHeadquarterFocus}
      showError={companyHeadquarterError}
      icon={<LocationFillIconSVG className={styles['location-icon']} />}
      iconPosition={'end'}
      placeholder='Enter your Official Location'
      helperText={companyHeadquarterError ? 'This is a mandatory field' : ''}
    />,
    <InputLabel
      label='LinkedIn Profile URL'
      className='w-48 mb-2'
      value={linkedInProfileUrl}
      onChange={e => {
        handleLinkedinChange(e);
        handleLinkedInChange(e.target.value);
      }}
      onBlur={handleLinkedinBlur}
      onFocus={handleLinkedinFocus}
      showError={linkedinError}
      placeholder='Enter your LinkedIn Profile URL'
      helperText={linkedinError ? 'This is a mandatory field' : ''}
    />,
    <InputWithTextArea
      label='About the Company'
      className={`w-100 mb-2`}
      value={aboutCompany}
      onChange={e => {
        handleAboutCompanyChange(e);
        handleAboutChange(e.target.value);
      }}
      onBlur={handleAboutCompanyBlur}
      onFocus={handleAboutCompanyFocus}
      showError={aboutCompanyError}
      placeholder='Give a brief description about your company'
      rows={3}
      helperText={aboutCompanyError ? 'This is a mandatory field' : ''}
    />,
    <InputWithMultiSelectDropdown
      label='City of Operation'
      options={cities}
      selectedOptions={cityOperation}
      setSelectedOptions={setCityOperation}
      dropdownStyles={`w-100`}
      pillStyles={'input-field-sm'}
      
    />,
  ];

  const LocationDropdown = ({ label, options, selectedOptions, onChange }) => (
    <InputWithMultiSelectDropdown
      label={label}
      options={options}
      selectedOptions={selectedOptions}
      setSelectedOptions={onChange}
      dropdownStyles={`w-100`}
      pillStyles={'input-field-sm'}
    />
  );

  useEffect(() => {
    // setDisabled(!formValid);
  }, [formValid, setDisabled]);

  const handleNextSubmit = e => {
    e.preventDefault();
    // setDisabled(!formValid);
    resetCompanyName();
    resetOfficialEmailId();
    resetOfficialContactNumber();
    resetOfficialWebsite();
    resetCompanyHeadquarter();
    resetLinkedin();
    resetAboutCompany();
  };

  const handleImageUpload = (image) => {
    console.log('Image uploaded:', image);
    dispatch(brokerProfileAction.updateCompanyLogo(image));
  };

  const handleLocationChange = (cityId, locationIds) => {

    dispatch(brokerProfileAction.updateLocationsByCity({ cityId, locationIds }));
  };


  return (
    <form className={styles['form-div']} onSubmit={handleNextSubmit}>
      <div className='d-flex w-100'>
        <div className='w-25'>
          <UploadLogo label='Upload Company Logo' name={'company-details'} preview={companyLogo}
            onImageUpload={handleImageUpload} />
        </div>
        <div className='w-75'>
          <div className={styles['form-items-div']}>{formItem}</div>
        </div>
      </div>
      <div className={`${styles['form-items-div']}`}>{formItem2}</div>
      <div className='div-space-end flex-wrap'>
        {/* {cityOperation.map(value => (
          <div className='w-90'>
            <InputWithMultiSelectDropdown
              label={`Areas of Operation - ${value}`}
              options={locations}
              selectedOptions={areaOperation}
              setSelectedOptions={setAreaOperation}
              dropdownStyles={`w-100`}
              pillStyles={'input-field-sm'}
            />
          </div>
        ))} */}
         {cityOperation.map((cityId) => {
      const locations = locationsByCity[cityId] || [];
      
      return (
        <InputWithMultiSelectDropdown
          key={cityId}
          label={`Locations for City ${cityId}`}
          options={locations}
          // selectedOptions={''}
          selectedOptions={locationsId}
      // setSelectedOptions={setLocationsId}
      setSelectedOptions={(selectedOptions) => {
        setLocationsId(selectedOptions);
        dispatch(brokerProfileAction.updateLocationsByCity({ locations : locationsId }));
        // handleLocationChange(cityId, selectedOptions);
      }}
         
        />
      );
    })}
      </div>
    </form>
  );
};

export default CompanyDetails;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../../apiMethods/api';
import { threeColArray } from '../../../../Comman/Utility';
import InputLabel from '../../../../components/InputLabel';
import InputWithSingleSelectDropdown from '../../../../components/InputWithSingleSelectDropdown';
import MultipleTextInput from '../../../../components/MultipleTextInput';
import useInput from '../../../../Hooks/use-input';
import { brokerProfileAction } from '../../../../store/broker-profile-slice';
import { validateGst, validateNumber, validatePan } from '../../../../utils/validations';
// import { cityOFOperation } from '../../config/brokerProfileData';
import styles from './CompanyDetails.module.css';

const ProfessionalDetails = (props) => {
  const { setDisabled } = props;
  const dispatch = useDispatch();
  const [reraType, setReraType] = useState();
  const [specialization ,setSpecializations] = useState();

  const professionalDetails = useSelector((state) => state.brokerProfile?.reraTypes);


  const {
    reraId,
    reraRegistrationNo,
    panNo,
    gstNo,
    specializations,
    yearsOfExperience,
    activeListing,
    totalClientsServed,
    totalDealsClosed,
    pastClients,
  } = professionalDetails;

  const fetchCitiesData = async () => {
    const response = await fetchData('master/rera-types');
    if (response?.length > 0) {
      return threeColArray(response, 'id', 'name');
    }
    return [];
  };

  useEffect(() => {
    const getCitiesData = async () => {
      const citiesData = await fetchCitiesData();
      setReraType(citiesData)
      // dispatch(brokerProfileAction.updateCityData(citiesData));
    };
    getCitiesData();
  }, [dispatch]);


  const fetchSpecialisationData = async () => {
    const response = await fetchData('/master/specializations');
    if (response?.length > 0) {
      return threeColArray(response, 'id', 'name');
    }
    return [];
  };

  useEffect(() => {
    const getSpecialisationData = async () => {
      const citiesData = await fetchSpecialisationData();
      setSpecializations(citiesData)
      // dispatch(brokerProfileAction.updateCityData(citiesData));
    };
    getSpecialisationData();
  }, [dispatch]);






  useEffect(() => {

    dispatch(brokerProfileAction.setSpecializations({ specializations }));
    dispatch(brokerProfileAction.setClients({ clients: pastClients }));
    dispatch(brokerProfileAction.setRegistrationNo({ registrationNo: reraRegistrationNo }));
    dispatch(brokerProfileAction.setPan({ panNo }));
    dispatch(brokerProfileAction.setGst({ gstNo }));
    dispatch(brokerProfileAction.setYearsExperience({ yearsOfExperience }));
    dispatch(brokerProfileAction.setActiveListings({ activeListing }));
    dispatch(brokerProfileAction.setTotalClientsServed({ totalClientsServed }));
    dispatch(brokerProfileAction.setTotalDealsClosed({ totalDealsClosed }));
  }, [
    dispatch,
    specializations,
    pastClients,
    reraRegistrationNo,
    panNo,
    gstNo,
    yearsOfExperience,
    activeListing,
    totalClientsServed,
    totalDealsClosed,
  ]);

 

 



  const handlePastClient = (clients) => {
    dispatch(brokerProfileAction.setClients({ clients }));
  };

  const handleRegistrationNoChange = (value) => {
    dispatch(brokerProfileAction.setRegistrationNo({ registrationNo: value }));
  };

  const handlePanChange = (value) => {
    dispatch(brokerProfileAction.setPan({ panNo: value }));
  };

  const handleGstChange = (value) => {
    dispatch(brokerProfileAction.setGst({ gstNo: value }));
  };

  const handleYearsExperienceChange = (value) => {
    dispatch(brokerProfileAction.setYearsExperience({ yearsOfExperience: value }));
  };

  const handleActiveListingsChange = (value) => {
    dispatch(brokerProfileAction.setActiveListings({ activeListing: value }));
  };

  const handleTotalClientsServedChange = (value) => {
    dispatch(brokerProfileAction.setTotalClientsServed({ totalClientsServed: value }));
  };

  const handleTotalDealsClosedChange = (value) => {
    dispatch(brokerProfileAction.setTotalDealsClosed({ totalDealsClosed: value }));
  };

  const {
    isValid: isRegistrationNoValid,
    isTouched: isRegistrationNoTouched,
    handleInputChange: handleRegistrationNoInputChange,
    handleInputBlur: handleRegistrationNoBlurChange,
    handleInputFocus: handleRegistrationNoFocus,
    resetInput: resetRegistrationNo,
  } = useInput(validateNumber, reraRegistrationNo);

  const {
    isValid: isPanValid,
    isTouched: isPanTouched,
    handleInputChange: handlePanInputChange,
    handleInputBlur: handlePanBlurChange,
    handleInputFocus: handlePanFocus,
    resetInput: resetPan,
  } = useInput(validatePan, panNo);

  const {
    isValid: isGstValid,
    isTouched: isGstTouched,
    handleInputChange: handleGstInputChange,
    handleInputBlur: handleGstBlurChange,
    handleInputFocus: handleGstFocus,
    resetInput: resetGst,
  } = useInput(validateGst, gstNo);

  const {
    isValid: isYearsExperienceValid,
    isTouched: isYearsExperienceTouched,
    handleInputChange: handleYearsExperienceInputChange,
    handleInputBlur: handleYearsExperienceBlurChange,
    handleInputFocus: handleYearsExperienceFocus,
    resetInput: resetYearsExperience,
  } = useInput(validateNumber, yearsOfExperience);

  const {
    isValid: isActiveListingsValid,
    isTouched: isActiveListingsTouched,
    handleInputChange: handleActiveListingsInputChange,
    handleInputBlur: handleActiveListingsBlurChange,
    handleInputFocus: handleActiveListingsFocus,
    resetInput: resetActiveListings,
  } = useInput(validateNumber, activeListing);

  const {
    isValid: isTotalClientsServedValid,
    isTouched: isTotalClientsServedTouched,
    handleInputChange: handleTotalClientsServedInputChange,
    handleInputBlur: handleTotalClientsServedBlurChange,
    handleInputFocus: handleTotalClientsServedFocus,
    resetInput: resetTotalClientsServed,
  } = useInput(validateNumber, totalClientsServed);

  const {
    isValid: isTotalDealsClosedValid,
    isTouched: isTotalDealsClosedTouched,
    handleInputChange: handleTotalDealsClosedInputChange,
    handleInputBlur: handleTotalDealsClosedBlurChange,
    handleInputFocus: handleTotalDealsClosedFocus,
    resetInput: resetTotalDealsClosed,
  } = useInput(validateNumber, totalDealsClosed);

  // Error handling
  const registrationNoError = isRegistrationNoTouched && !isRegistrationNoValid;
  const panError = isPanTouched && !isPanValid;
  const gstError = isGstTouched && !isGstValid;
  const yearsExperienceError = isYearsExperienceTouched && !isYearsExperienceValid;
  const activeListingsError = isActiveListingsTouched && !isActiveListingsValid;
  const totalClientsServedError = isTotalClientsServedTouched && !isTotalClientsServedValid;
  const totalDealsClosedError = isTotalDealsClosedTouched && !isTotalDealsClosedValid;

  // Form validation
  const formValid =
    !registrationNoError &&
    !panError &&
    !gstError &&
    !yearsExperienceError &&
    !activeListingsError &&
    !totalClientsServedError &&
    !totalDealsClosedError;

  // Dropdown handling
  const handleDropdownChange = (selectedId) => {
    dispatch(brokerProfileAction.setReraID({ reraId: selectedId.id }));
  };


  const selectedCity = Array.isArray(reraType) ? reraType.find(city => city.id === reraId) : null;
  const selectedValue = selectedCity ? selectedCity.value : '';
  const dropdownOptions = Array.isArray(reraType) ? reraType.map(city => ({
    value: city.value,
    id: city.id
  })) : [];


  const handleSpecializationsDropdownChange = (selectedId) => {
    console.log(selectedId ,'latest');
    dispatch(brokerProfileAction.setSpecializations({
      specializations: [selectedId]
    }));
  };

  const selectedSpecialization = Array.isArray(specialization) 
  ? specialization.find(spec => spec.id === specializations[0]?.specializationId) 
  : null;
const selectedSpecializationValue = selectedSpecialization ? selectedSpecialization.value : '';
const specializationOptions = Array.isArray(specialization) ? specialization.map(spec => ({
  value: spec.value,
  id: spec.id
})) : [];

console.log(specializationOptions ,'spec');

 


  const formItem = [
    <InputWithSingleSelectDropdown
      key="rera-type-dropdown"
      label="RERA Type"
      value={selectedValue}
      options={dropdownOptions}
      onDropdownChange={handleDropdownChange}
      optionsVariant="white-background-options"
      className="w-48"
    />,
    <InputLabel
      key="registration-no"
      label="RERA Registration No."
      className="w-48 mb-2"
      value={reraRegistrationNo}
      onChange={(e) => {
        handleRegistrationNoInputChange(e);
        handleRegistrationNoChange(e.target.value);
      }}
      onBlur={handleRegistrationNoBlurChange}
      onFocus={handleRegistrationNoFocus}
      showError={registrationNoError}
      placeholder="Enter your Registration No"
    />,
    <InputLabel
      key="pan-number"
      label="PAN Number"
      className="w-48 mb-3"
      value={panNo}
      onChange={(e) => {
        handlePanInputChange(e);
        handlePanChange(e.target.value);
      }}
      onBlur={handlePanBlurChange}
      onFocus={handlePanFocus}
      showError={panError}
      placeholder="Enter your PAN"
    />,
    <InputLabel
      key="gst-number"
      label="GST Number"
      className="w-48 mb-3"
      value={gstNo}
      onChange={(e) => {
        handleGstInputChange(e);
        handleGstChange(e.target.value);
      }}
      onBlur={handleGstBlurChange}
      onFocus={handleGstFocus}
      showError={gstError}
      placeholder="Enter your GST"
    />,
    // <MultipleTextInput
    //   key="specializations"
    //   label="Specializations"
    //   texts={specializationNames}
    //   setTexts={handleSpecializationsChange}
    //   placeholder="Enter your Specializations"
    // />,
    <InputWithSingleSelectDropdown
    key="rera-type-dropdown"
    label="Specializations"
    value={selectedSpecializationValue}
    options={specializationOptions}
    onDropdownChange={handleSpecializationsDropdownChange}
    optionsVariant="white-background-options"
    className="w-48"
  />,
    <InputLabel
      key="years-experience"
      label="Years of Experience"
      className="w-48 mb-2"
      type="number"
      value={yearsOfExperience}
      blockPosition="start"
      blockValue="+91"
      onChange={(e) => {
        handleYearsExperienceInputChange(e);
        handleYearsExperienceChange(e.target.value);
      }}
      onBlur={handleYearsExperienceBlurChange}
      onFocus={handleYearsExperienceFocus}
      showError={yearsExperienceError}
      placeholder="Enter your Years of Experience"
    />,
    <InputLabel
      key="active-listings"
      label="Active Listings"
      type="number"
      className="w-48 mb-2"
      value={activeListing}
      onChange={(e) => {
        handleActiveListingsInputChange(e);
        handleActiveListingsChange(e.target.value);
      }}
      onBlur={handleActiveListingsBlurChange}
      onFocus={handleActiveListingsFocus}
      showError={activeListingsError}
      placeholder="Enter your Active Listings"
    />,
    <InputLabel
      key="total-clients-served"
      label="Total Clients Served"
      type="number"
      className="w-48 mb-2"
      value={totalClientsServed}
      blockPosition="start"
      blockValue="+91"
      onChange={(e) => {
        handleTotalClientsServedInputChange(e);
        handleTotalClientsServedChange(e.target.value);
      }}
      onBlur={handleTotalClientsServedBlurChange}
      onFocus={handleTotalClientsServedFocus}
      showError={totalClientsServedError}
      placeholder="Enter your Total Clients Served"
    />,
    <InputLabel
      key="total-deals-closed"
      label="Total Deals Closed"
      type="number"
      className="w-48 mb-2"
      value={totalDealsClosed}
      blockPosition="start"
      blockValue="+91"
      onChange={(e) => {
        handleTotalDealsClosedInputChange(e);
        handleTotalDealsClosedChange(e.target.value);
      }}
      onBlur={handleTotalDealsClosedBlurChange}
      onFocus={handleTotalDealsClosedFocus}
      showError={totalDealsClosedError}
      placeholder="Enter your Total Deals Closed"
    />,
    <MultipleTextInput
      key="past-client"
      label="Past Client"
      texts={pastClients}
      setTexts={handlePastClient}
      placeholder="Enter your past clients"
    />,
  ];

  const handleNextSubmit = (e) => {
    e.preventDefault();
    setDisabled(!formValid);
    resetRegistrationNo();
    resetPan();
    resetGst();
    resetYearsExperience();
    resetActiveListings();
    resetTotalClientsServed();
    resetTotalDealsClosed();
  };

  return (
    <form className={styles['form-div']} onSubmit={handleNextSubmit}>
      <div className="d-flex w-100">
        <div className="w-100">
          <div className={styles['form-items-div']}>{formItem}</div>
        </div>
      </div>
    </form>
  );
};

export default ProfessionalDetails;

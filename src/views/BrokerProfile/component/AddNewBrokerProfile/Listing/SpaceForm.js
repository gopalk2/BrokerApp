import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputLabel from '../../../../../components/InputLabel';
import useInput from '../../../../../Hooks/use-input';
import { brokerProfileAction } from '../../../../../store/broker-profile-slice';
import { validateText, validateNumber } from '../../../../../utils/validations';
import UploadLogo from '../UploadLogo';
import styles from './SpaceForm.module.css';
import InputWithSingleSelectDropdown from '../../../../../components/InputWithSingleSelectDropdown';
import {
  spaceType, cityOFOperation,
} from '../../../config/brokerProfileData';
import { fetchData } from '../../../../../apiMethods/api';
import { threeColArray } from '../../../../../Comman/Utility';


const SpaceForm = ({ property }) => {
  const dispatch = useDispatch();

  const [cities, setCities] = useState();
  const [locations, setLocations] = useState([]);



  const propertyData = useSelector((state) =>
    state.brokerProfile.reraTypes.properties.find((item) => item.id === property.id) || {}
  );

  const fetchCitiesData = async () => {
    const response = await fetchData('master/cities');
    if (response?.length > 0) {
      return threeColArray(response, 'id', 'name');
    }
    return [];
  };

  useEffect(() => {
    const getCitiesData = async () => {
      const citiesData = await fetchCitiesData();
      console.log()
      setCities(citiesData);
    };
    getCitiesData();
  }, [dispatch]);

  useEffect(()=>{
    handleCityChange()
  },[propertyData.cityId])

  const handleCityChange = async (cityId) => {
    const cityIdToUse = cityId?.id || propertyData.cityId;

    if (cityIdToUse) {
      const response = await fetchData(`/master/cities/${cityIdToUse}/locations`);
      if (response?.length > 0) {
        console.log('hello')
        setLocations(threeColArray(response, 'id', 'name'));
      } else {
        setLocations([]);
      }
      dispatch(brokerProfileAction.updatePropertyCity({ id: property.id, cityId: cityIdToUse }));
    }
  };


  const {
    handleInputBlur: handlePropertyNameBlurChange,
    handleInputFocus: handlePropertyNameFocus
  } = useInput(validateText);
  const {
    handleInputBlur: handleSeatingPriceBlurChange,
    handleInputFocus: handleSeatingPriceFocus
  } = useInput(validateText);


  const {
    handleInputBlur: handleLocationBlurChange,
    handleInputFocus: handleLocationFocus
  } = useInput(validateText);

  const {
    handleInputBlur: handleDesignationBlurChange,
    handleInputFocus: handleDesignationFocus
  } = useInput(validateText);

  const {
    handleInputBlur: handleLeasableAreaBlurChange,
    handleInputFocus: handleLeasableAreaFocus
  } = useInput(validateNumber);

  const handlePropertyNameChange = (e) => {
    const { value } = e.target;
    dispatch(brokerProfileAction.updatePropertyName({ id: property.id, name: value }));
  };

 

  const handleDesignationChange = (e) => {
    const { value } = e.target;
    dispatch(brokerProfileAction.updatePropertyDesignation({ id: property.id, designation: value }));
  };

  const handleLeasableAreaChange = (e) => {
    const { value } = e.target;
    dispatch(brokerProfileAction.updatePropertyLeasableArea({ id: property.id, leasableArea: value }));
  };

  const handleImageUpload = (image) => {
    dispatch(brokerProfileAction.updatePropertyLogo({ id: property.id, image: image }));
  };

  const handleSpaceTypeChange = (value) => {
    dispatch(brokerProfileAction.updatePropertySpaceType({
      id: property.id,
      spaceType: value,
    }));
  };


  const handleSeatingPriceChange = e => {
    const { value } = e.target;
    dispatch(
      brokerProfileAction.updateLocation({
        id: property.id,
        location: value
      })
    );
  };



  // const formItem = [
  //   <InputWithSingleSelectDropdown
  //     label={'Space Type'}
  //     value={'Commercial'}
  //     options={spaceType}
  //     onDropdownChange={handleSpaceTypeChange}
  //     optionsVariant='white-background-options'
  //     className='w-30'
  //   />,
  //   <InputLabel
  //     key="name"
  //     label='Property Name'
  //     className='w-48 mb-2'
  //     value={propertyData.name || ''}
  //     onChange={handlePropertyNameChange}
  //     onBlur={handlePropertyNameBlurChange}
  //     onFocus={handlePropertyNameFocus}
  //     placeholder='Enter your Property Name'
  //   />,
  //   <InputLabel
  //     label='Seating Price (In INR/sq.ft/month)'
  //     className={`w-30 mb-2`}
  //     // value={space.location}
  //     onChange={handleSeatingPriceChange}
  //     onBlur={handleSeatingPriceBlurChange}
  //     onFocus={handleSeatingPriceFocus}
  //     placeholder='Enter your Seating Price'
  //   />,
  //   <InputWithSingleSelectDropdown
  //     label={'City'}
  //     value={'Noida'}
  //     options={cityOFOperation}
  //     onDropdownChange={handleSpaceTypeChange}
  //     optionsVariant='white-background-options'
  //     className='w-30'
  //   />,
  //   <InputWithSingleSelectDropdown
  //     key="location"
  //     label='Location'
  //     className='w-48 mb-2'
  //     value={propertyData.location || ''}
  //     onChange={handleLocationChange}
  //     onBlur={handleLocationBlurChange}
  //     onFocus={handleLocationFocus}
  //     placeholder='Enter your Location'
  //   />,
  //   // <InputLabel
  //   //   key="designation"
  //   //   label='Designation'
  //   //   className='w-48 mb-2'
  //   //   value={propertyData.designation || ''}
  //   //   onChange={handleDesignationChange}
  //   //   onBlur={handleDesignationBlurChange}
  //   //   onFocus={handleDesignationFocus}
  //   //   placeholder='Enter your Designation'
  //   // />,
  //   <InputLabel
  //     key="leasableArea"
  //     label='Leasable Area (in sq.ft.)'
  //     type='number'
  //     className='w-48 mb-2'
  //     value={propertyData.leasableArea || ''}
  //     onChange={handleLeasableAreaChange}
  //     onBlur={handleLeasableAreaBlurChange}
  //     onFocus={handleLeasableAreaFocus}
  //     placeholder='Enter your Leasable Area (in sq.ft.)'
  //   />
  // ];

  const handleSpaceNameChange = e => {
    const { value } = e.target;
    dispatch(
      brokerProfileAction.updateSpaceName({
        id: property.id,
        spaceName: value
      })
    );
  };

  const handleLocationChange = (locationId) => {
    dispatch(brokerProfileAction.updatePropertyLocationId({
      id: property.id,
      locationId: locationId.id
    }));
  };

console.log(propertyData.cityId,'data')
 
const selectedCity = cities?.find(city => city?.id === propertyData.cityId);
const selectedCityValue = selectedCity ? selectedCity.value : '';
// const cityOptions = cities?.map(city => ({ id: city.id, value: city.name }));
const cityOptions = Array.isArray(locations) ? cities?.map(spec => ({
  value: spec.value,
  id: spec.id
})) : [];

console.log(selectedCityValue,'option')
 

const selectedLocation = locations?.find(location => location.id === propertyData.locationId);
const selectedLocationValue = selectedLocation ? selectedLocation.value : '';
// const locationOptions = locations?.map(location => ({ id: location.id, value: location.name }));
const locationOptions = Array.isArray(locations) ? locations?.map(spec => ({
  value: spec.value,
  id: spec.id
})) : [];
 
 

  console.log(selectedLocationValue, 'spacetypoe');

  const formItem = [
    <InputWithSingleSelectDropdown
      label={'Space Type'}
      // value={propertyData.propertyType || ''}
      options={spaceType}
      onDropdownChange={(value) => {
        dispatch(brokerProfileAction.updatePropertySpaceType({ id: property.id, propertyType: value }));
      }}
      optionsVariant='white-background-options'
      className='w-30'
    />,
    <InputLabel
      label='Space Name'
      className={`w-30 mb-2`}
      value={propertyData.name || ''}
      onChange={handlePropertyNameChange}
      onBlur={handlePropertyNameBlurChange}
      onFocus={handlePropertyNameFocus}
      placeholder='Enter your Space Name'
    />,
    <InputLabel
      label='Seating Price (In INR/sq.ft/month)'
      className={`w-30 mb-2`}
      // value={space.location}
      onChange={handleSeatingPriceChange}
      onBlur={handleSeatingPriceBlurChange}
      onFocus={handleSeatingPriceFocus}
      placeholder='Enter your Seating Price'
    />,
    <InputWithSingleSelectDropdown
      label={'City'}
     value={selectedCityValue}
     options={cityOptions}
      onDropdownChange={handleCityChange}
      optionsVariant='white-background-options'
      className='w-30'
    />,
    <InputWithSingleSelectDropdown
    label={'Location'}
    value={selectedLocationValue}
    options={locationOptions}
      onDropdownChange={handleLocationChange}
    optionsVariant='white-background-options'
    className='w-30'
  />,
   <InputLabel
      key="designation"
      label='Designation'
      className='w-48 mb-2'
      value={propertyData.designation || ''}
      onChange={handleDesignationChange}
      onBlur={handleDesignationBlurChange}
      onFocus={handleDesignationFocus}
      placeholder='Enter your Designation'
    />,

    <InputLabel
      label='Leasable Area (in sq.ft.)'
      type='number'
      className={`w-30 mb-2`}
      value={propertyData.leasableArea || ''}
      onChange={handleLeasableAreaChange}
      onBlur={handleLeasableAreaBlurChange}
      onFocus={handleLeasableAreaFocus}
      placeholder='Enter your Leasable Area (in sq.ft.)'
    />
  ];


  const propertyLogo = propertyData.image || '';

  console.log(locations, 'locations');

  return (
    <form className={styles['form-div']} key={property.id}>
      <div className='d-flex w-100'>
        <div className='w-25'>
          <UploadLogo
            label='Cover Photo'
            name={property.name}
            preview={propertyLogo}
            onImageUpload={handleImageUpload}
          />
        </div>
        <div className='w-75'>
          <div className={styles['form-items-div']}>{formItem}</div>
        </div>
      </div>
    </form>
  );
};

export default SpaceForm;

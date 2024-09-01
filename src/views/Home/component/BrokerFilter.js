import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../apiMethods/api';
import { ReactComponent as LocationIconSVG } from '../../../assets/iconSvg/location.svg';
import { ReactComponent as MoreFilterIconSVG } from '../../../assets/iconSvg/more_filter.svg';
import { ReactComponent as CurrentLocationIconSVG } from '../../../assets/iconSvg/my_location.svg';
import { ReactComponent as SearchIconSVG } from '../../../assets/iconSvg/search.svg';
import { ReactComponent as SpaceIconSVG } from '../../../assets/iconSvg/space.svg';
import { threeColArray } from '../../../Comman/Utility';
import Button from '../../../components/Buttons/Button';
import DropdownMultipleSelection from '../../../components/DropdownMultipleSelection';
import DropdownSingleSelection from '../../../components/DropdownSingleSelection';
import { ApiResDataAction } from '../../../store/apiRes-Data-slice';
import { brokerAction } from '../../../store/broker-slice';
import {
  brokerTypeData,
  // citiesOptions,
  // localityData
} from '../config/homeData';
import styles from './BrokerFilter.module.css';
import MoreFilters from './MoreFilters';

const BrokerFilter = ({ onFilter }) => {

  const [selectedLocality, setSelectedLocality] = useState([]);
  const [citiesLocation, setCitiesLocation] = useState([]);
  const [specializationsData, setSpecializationsData] = useState([]);
  const cityData = useSelector(state => state.apiResData?.cityArray);
  // const filterObj = useSelector(state => state.broker?.filters);

  const dispatch = useDispatch();

  const { city, locality, brokerType } = useSelector(state => state.brokerHome.filters);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCity = val => {
    setCitiesLocation([]); setSelectedLocality([]);
    getCitiesLocationData(val?.id);
    dispatch(brokerAction.updateCityFilter({ city: val }));
  };

  const handleBrokerType = val => {
    dispatch(brokerAction.updateBrokerFilter({ brokerType: val }));
  };

  useEffect(() => {
    dispatch(brokerAction.updateLocalityFilter({ locality: selectedLocality }));
    if (cityData?.length === 0) getCitiesData();
    getSpecializationData();
  }, [selectedLocality]);

  const handleSearch = () => {
    const selectedFilters = { city, locality, brokerType };
    onFilter(selectedFilters);
  };

  const getCitiesData = async () => {
    const response = await fetchData('master/cities');
    // console.log(response)
    if (response?.length > 0) {
      // setCityArray(threeColArray(response, 'id', 'name'))
      dispatch(ApiResDataAction.updateCityData(threeColArray(response, 'id', 'name')));
    }
  }

  const getCitiesLocationData = async (id) => {
    const response = await fetchData(`master/cities/${id}/locations`);
    // console.log(response)
    if (response?.length > 0) {
      setCitiesLocation(threeColArray(response, 'id', 'name'))
    }
  }

  const getSpecializationData = async (id) => {
    const response = await fetchData('master/specializations');
    // console.log(response)
    if (response?.length > 0) {
      setSpecializationsData(threeColArray(response, 'id', 'name'))
    }
  }

  return (
    <div className={styles['commercial-filter']}>
      <div className={styles['dropdown-div']}>
        <span>
          <LocationIconSVG className={styles['location-icon']} />
        </span>
        <DropdownSingleSelection
          // defaultValue={'Delhi'}
          // data={citiesOptions}
          data={cityData}
          variant='transparent'
          iconPosition='left'
          dropdownChangeHandler={handleCity}
        />
      </div>
      <div className={styles['dropdown-div']}>
        <span>
          <CurrentLocationIconSVG className={styles['location-icon']} />
        </span>
        <DropdownMultipleSelection
          data={citiesLocation}
          // data={localityData}
          variant='light-bg-blue-text'
          placeholder='Select Locality'
          showOneSelectedOptions={true}
          selectedOptions={selectedLocality}
          setSelectedOptions={setSelectedLocality}
          showOneSelectedText={true}
          className={styles['transparent']}
        />
      </div>
      <div className={styles['dropdown-div']}>
        <span>
          {' '}
          <SpaceIconSVG className={styles['location-icon']} />
        </span>
        <DropdownSingleSelection
          // defaultValue={'Commercial Leasing'}
          // data={brokerTypeData}
          data={specializationsData}
          variant='transparent'
          iconPosition='left'
          dropdownChangeHandler={handleBrokerType}
        />
      </div>
      <div className={styles['dropdown-div']}>
        <div className={`${styles['dropdown-with-btn']} `}>
          <Button
            label='More Filter'
            icon={<MoreFilterIconSVG className={styles['filter-icon']} />}
            iconPosition='left'
            variant='transparent'
            className='body-sm'
            onClick={toggleDropdown}
          />
          {isOpen && (
            <div className={styles['dropdown-btn-options']}>
              <MoreFilters onClose={toggleDropdown} />
            </div>
          )}
        </div>
      </div>
      <div className={styles['search-div']}>
        <Button
          label='Search'
          icon={<SearchIconSVG className={styles['search-icon']} />}
          iconPosition='left'
          variant='transparent'
          className={styles['search-button']}
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default BrokerFilter;

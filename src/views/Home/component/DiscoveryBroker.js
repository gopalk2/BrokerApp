import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../apiMethods/api';
import BrokerCard from './BrokerCard';
import BrokerFilter from './BrokerFilter';
import styles from './DiscoveryBroker.module.css';
import { brokerAction } from '../../../store/broker-slice';

const DiscoveryBroker = () => {

  const dispatch = useDispatch();
  const { city, locality, brokerType } = useSelector(state => state.brokerHome.filters);

  const brokerData = useSelector(state => state?.broker?.discoveryBroker);

  const [filteredData, setFilteredData] = useState([]);
  const [cityArr, setCityArr] = useState('');
  const [brokerArr, setBrokerArr] = useState('');
  const [localityArr, setLocalityArr] = useState('');

  useEffect(() => {
    getDiscoveryBrokerData()
  }, []);

  useEffect(() => {
    filterData();
  }, [city, locality, brokerType]);

  const handleFilter = (selectedFilters) => {
    // console.log(selectedFilters)
    const { city, locality, brokerType } = selectedFilters;

    let filtered = brokerData;
    setCityArr(city?.city?.id);
    setBrokerArr(brokerType?.brokerType?.id);
    setLocalityArr(locality?.locality?.join(','))
    getDiscoveryBrokerData(city?.city?.id, brokerType?.brokerType?.id, locality?.locality?.join(','))

    if (city) {
      filtered = filtered?.filter(broker => broker?.city === city);
    }
    if (locality && locality.length > 0) {
      filtered = filtered?.filter(broker => locality?.includes(broker.locality));
    }
    if (brokerType) {
      filtered = filtered?.filter(broker => broker?.brokerType === brokerType);
    }
    // setFilteredData(filtered);
  };

  const getDiscoveryBrokerData = async (cityID, BrokerType, Locality) => {
    const res = await fetchData(`brokers?query=${''}&locations=${Locality ? Locality : ''}&city=${cityID ? cityID : ''}&specializations${BrokerType ? BrokerType : ''}`);
    dispatch(brokerAction.setDiscoveryBroker(res)); setFilteredData(res);
    // console.log(res)
  }

  const filterData = () => {
    if (!city && !locality && !brokerType) {
      setFilteredData(brokerData);
      return;
    }
    let filtered = brokerData;
    setFilteredData(filtered);
  };

  return (
    <div className='w-90'>
      <div className='div-center'>
        <p className={styles['heading-text']}>
          Discover top brokers as per your need
        </p>
      </div>
      <div className='div-center'>
        <BrokerFilter onFilter={handleFilter} />
      </div>
      <div className='mt-4 mb-4'>
        <p className={styles['heading-text']}>
          {filteredData?.length}  brokers found | 3 filters applied
          {/* 96 matching brokers found | 3 filters applied */}
        </p>
      </div>
      <div className='div-space-between f-wrap'>
        {filteredData?.map(value => (
          <div className={styles['card']} key={value.id}>
            {/* <BrokerCard data={value} type='broker' /> */}
            <BrokerCard data={value} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoveryBroker;

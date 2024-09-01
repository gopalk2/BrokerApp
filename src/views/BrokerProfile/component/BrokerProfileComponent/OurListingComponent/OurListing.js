import React, { useState } from 'react';
import { listingType } from '../../../config/brokerProfileData';
import CommercialComponent from './CommercialComponent';
import styles from './OurListing.module.css';

const OurListing = ({ listingData }) => {

  const [activeTab, setActiveTab] = useState('Commercial');
  // console.log(listingData)

  const handleTab = active => {
    setActiveTab(active);
  };

  let listingComponent;
  if (activeTab === 'Commercial') {
    listingComponent = <CommercialComponent listingData={listingData}/>;
  } else if (activeTab === 'Housing') {
    listingComponent = 'Welcome Hosing List';
  }

  return (
    <div className='w-100'>
      <div className={styles['our-listing-border-container']}>
        <p className='h2-text mb-0'>Our Listings</p>
        <div className={styles['tab']}>
          {listingType?.map(value => (
            <div
              className={
                activeTab === value?.label
                  ? styles['active-tab']
                  : styles['inactive-tab']
              }
              onClick={() => handleTab(value?.label)}
              key={value?.id}
            >
              <span className={styles['tab-text']}>
                {value.label}
                <span
                  className={
                    activeTab === value?.label
                      ? styles['active-dot']
                      : styles['inactive-dot']
                  }
                ></span>
                17
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className='w-100'>{listingComponent}</div>
    </div>
  );
};

export default OurListing;

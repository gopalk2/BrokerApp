import React from 'react';
// import { useSelector } from 'react-redux';
import { professionalInformationData } from '../../config/brokerProfileData';
import styles from './ProfessionalInformation.module.css';

const ProfessionalInformation = ({ professionalInfo }) => {

  return (
    <div className='w-100'>
      <p className='h2-text'>Professional Information</p>
      {professionalInfo?.map(item => (
        // console.log(item),
        <div className={styles['professional-information']} key={item.id}>
          <div className={styles['header']}>{item.head}</div>
          <div className={styles['table-data']}>{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalInformation;
